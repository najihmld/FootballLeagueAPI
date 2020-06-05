const connection = require('../config/mysql')

module.exports = {
  postRecordGame: setData => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO recordgame SET ?', setData, (err, result) => {
          if(!err) {
            const newResult = {
              id: result.insertId,
              ...setData
            }
            const clubData = {
              clubname: setData.clubhomename,
              points: '10'
            }
            connection.query(
              'INSERT INTO leaguestanding SET ?', clubData, (err, result) => {
                if(!err) {
                  console.log('berhasilll')
                } else {
                  reject(new Error(err))
                }
              }
            )
            
            resolve(newResult)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}