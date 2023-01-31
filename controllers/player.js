const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const Player = require('../models/player')

exports.getAllPlayers = (req, res, next) => {
  Player.find()
    .populate('accountId teamId lastBid')
    .lean()
    .then((players) => {
      return res.json({
        status: 'ok',
        msg: 'players fetched successfully',
        players: players,
      })
    })
    .catch((err) => {
      next(err)
    })
}

exports.getPlayerInfo = (req, res, next) => {
  const { playerId } = req.params
  Player.findById(playerId)
    .populate('accountId')
    .lean()
    .then((player) => {
      return res.json({
        status: 'ok',
        msg: 'player info fetched successsfully',
        player: player,
      })
    })
    .catch((err) => {
      next(err)
    })
}

exports.downloadPlayerDataCsv = (req, res, next) => {
  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', 'attachment; filename="playersData.csv"')

  const filePath = path.join(__dirname, '../', 'playerData.csv')
  Player.find()
    .populate('teamId accountId')
    .lean()
    .then((players) => {
      const header = [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'gender', title: 'Gender' },
        { id: 'phoneNumber', title: 'Phone' },
        { id: 'account', title: 'Account' },
        { id: 'team', title: 'Team' },
        { id: 'isCaptain', title: 'Captain' },
        { id: 'auctionStatus', title: 'Status' },
        { id: 'skill', title: 'Skill' },
        { id: 'level', title: 'Level' },
        { id: 'rating', title: 'Rating' },
      ]
      const data = players.map((player) => {
        return {
          name: player.name ? player.name : '',
          email: player.email ? player.email : '',
          gender: player.gender ? player.gender : '',
          phoneNumber: player.phoneNumber ? player.phoneNumber : '',
          account: player.accountId ? player.accountId.name : '',
          team: player.teamId ? player.teamId.name : '',
          isCaptain: player.isCaptain ? 'YES' : '',
          auctionStatus: player.auctionStatus ? player.auctionStatus : '',
          skill: player.skill ? player.skill : '',
          level: player.level ? player.level : '',
          rating: player.rating ? player.rating : '',
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
