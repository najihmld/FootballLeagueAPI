const connection = require('../config/mysql')

module.exports = {
  getLeagueStanding: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT clubname, points FROM leaguestanding', (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}