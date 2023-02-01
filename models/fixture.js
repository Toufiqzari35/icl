const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FixtureSchema = Schema({
  round: {
    type: Number,
  },
  match: {
    type: Number,
  },
  ground: {
    type: String,
  },
  teamA: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  teamB: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  result: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
})

module.exports = mongoose.model('Fixture', FixtureSchema)
