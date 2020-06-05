const express = require('express');
const Route = express.Router();

const {getLeagueStanding} = require('../controller/leaguestanding')

Route
  .get('/', getLeagueStanding)
module.exports = Route