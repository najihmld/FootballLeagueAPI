const {getLeagueStanding} = require('../model/leaguestanding')
const helper = require('../helper')

module.exports = {
  getLeagueStanding: async (req, res) => {
    try {
      const result = await getLeagueStanding()
      return helper.res(res, 200, result)
    } catch (err) {
      return helper.res(res, 404, err)
    }
  }
}