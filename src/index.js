const express = require('express')
const Route = express.Router()

const recordgame = require('./routes/recordgame');
const leaguestanding = require('./routes/leaguestanding')
const rank = require('./routes/rank')

Route
  .use('/recordgame', recordgame)
  .use('/leaguestanding', leaguestanding)
  .use('/rank', rank)
module.exports = Route