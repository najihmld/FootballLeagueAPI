const express = require('express');
const Route = express.Router();

const {getRank} = require('../controller/rank')

Route
  .get('/', getRank)
module.exports = Route