const path = require('path')
const csvtojson = require('csvtojson')

const createCsvWriter = require('csv-writer').createObjectCsvWriter
const Fixture = require('../models/fixture')
const Team = require('../models/team')

exports.getAllFixtures = (req, res, next) => {
  Fixture.find()
    .populate('teamA teamB result')
    .then((fixtures) => {
      return res.status(200).json({
        status: 'ok',
        msg: 'fixtures retrieved',
        fixtures: fixtures,
      })
    })
    .catch((err) => next(err))
}

exports.getFixturesCsv = (req, res, next) => {
  Fixture.find()
    .populate('teamA teamB result')
    .then((fixtures) => {
      return res.status(200).json({
        status: 'ok',
        msg: 'fixtures retrieved',
        fixtures: fixtures,
      })
    })
    .catch((err) => next(err))
}

exports.getFixturesCsv = (req, res, next) => {
  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', 'attachment; filename="playersData.csv"')

  const filePath = path.join(__dirname, '../', 'fixtureData.csv')
  Fixture.find()
    .populate('teamA teamB result')
    .lean()
    .then((fixtures) => {
      const header = [
        { id: 'match', title: 'match' },
        { id: 'round', title: 'round' },
        { id: 'ground', title: 'ground' },
        { id: 'date', title: 'date' },
        { id: 'time', title: 'time' },
        { id: 'teamA', title: 'teamA' },
        { id: 'teamB', title: 'teamB' },
        { id: 'result', title: 'result' },
      ]
      const data = fixtures.map((fixture) => {
        return {
          match: fixture.match ? fixture.match : '',
          round: fixture.round ? fixture.round : '',
          ground: fixture.ground ? fixture.ground : '',
          date: fixture.date ? fixture.date : '',
          time: fixture.time ? fixture.time : '',
          teamA: fixture.teamA ? fixture.teamA?.name : '',
          teamB: fixture.teamB ? fixture.teamB?.name : '',
          result: fixture.result ? fixture.result?.name : '',
        }
      })

      const csvWriter = createCsvWriter({
        path: filePath,
        header: header,
      })
      return csvWriter.writeRecords(data)
    })
    .then(() => {
      res.download(filePath)
    })
    .catch((err) => {
      next(err)
    })
}

exports.postFixturesFromCsv = (req, res, next) => {
  const filePath = req.files?.csv[0].path
  csvtojson()
    .fromFile(filePath)
    .then((data) => {
      for (let row of data) {
        let { match, round, ground, teamA, teamB, date, time, result } = row
        if (!match || !round) continue
        try {
          match = parseInt(match)
          round = parseInt(round)
        } catch {
          return res.status(400).json({
            status: 'error',
            msg: 'match or round invalid data',
          })
        }
        Promise.all([
          Team.findOne({ name: { $regex: `^${teamA}$`, $options: 'i' } }),
          Team.findOne({ name: { $regex: `^${teamB}$`, $options: 'i' } }),
          Team.findOne({
            name: { $regex: `^${result}$`, $options: 'i' },
          }),
        ])
          .then(([first, second, third]) => {
            return Fixture.replaceOne(
              { match, round },
              {
                match,
                round,
                ground,
                date,
                time,
                teamA: first?._id,
                teamB: second?._id,
                result: third?._id,
              },
              { upsert: true }
            )
          })
          .catch((err) => {
            console.log('-----------error-inserting-fixture------------\n', row)
          })
      }
    })

  return res.status(200).json({
    status: 'ok',
    msg: 'fixture update option triggered',
  })
}

exports.postEditFixture = (req, res, next) => {
  let { match, round, ground, teamA, teamB, date, time, result } = row
  if (!match || !round) {
    return res.status(400).json({
      status: 'error',
      msg: 'match or round not provided',
    })
  }

  try {
    match = parseInt(match)
    round = parseInt(round)
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      msg: 'match or round invalid data',
    })
  }

  Fixture.replaceOne({ match, round }, row)
    .then((output) => {
      return res.status(200).json({
        status: 'ok',
        msg: 'fixture edited',
        result: output?.result,
      })
    })
    .catch((err) => next(err))
}
