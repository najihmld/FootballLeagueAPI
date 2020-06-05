const express = require('express')
const Route = express.Router()

const recordgame = require('./routes/recordgame');
const leaguestanding = require('./routes/leaguestanding')

Route
  .use('/recordgame', recordgame)
  .use('/leaguestanding', leaguestanding)
module.exports = Route