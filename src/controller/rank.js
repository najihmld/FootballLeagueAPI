const {getRank} = require('../model/rank')
const helper = require('../helper')

module.exports = {
  getRank: async (req, res) => {
    try {
      const cond = {
        clubname: req.query.clubname
      }
      const result = await getRank(cond)
      return helper.res(res, 200, result)
    } catch (err) {
      return helper.res(res, 404, err)
    }
  }
}