const {postRecordGame} = require('../model/recordgame')
const helper = require('../helper')

module.exports = {
  postRecordGame: async (req, res) => {
    try {
      const setData = {
        clubhomename: req.body.clubhomename,
        clubawayname: req.body.clubawayname,
        score: req.body.score,
      }
      const result = await postRecordGame(setData)
      return helper.res(res, 200, result)
    } catch (err) {
      return helper.res(res, 404, err)
    }
  }
}