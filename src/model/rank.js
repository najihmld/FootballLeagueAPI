const connection = require('../config/mysql')

module.exports = {
  getRank: (cond) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT clubname, standing FROM leaguestanding WHERE clubname LIKE '%${cond.clubname}'`, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}