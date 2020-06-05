const express = require('express')
const Route = express.Router()

const recordgame = require('./routes/recordgame')

Route
  .use('/recordgame', recordgame)
module.exports = Route