const express = require('express');
const Route = express.Router();

const {postRecordGame} = require('../controller/recordgame')

Route
  .post('/', postRecordGame)
module.exports = Route