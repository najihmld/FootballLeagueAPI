const connection = require('../config/mysql')

module.exports = {
  postRecordGame: setData => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO recordgame SET ?', setData, (err, result) => {
          if(!err) {
            const score = setData.score
            const newScore = score.split(':')

            function point(score1, score2) {
              if(score1 > score2) {
                 return 3
            }  else if(score1 < score2) {
                 return 0
            } else if(score1 == score2) {
                return 1
            }
            }

            const clubHome = {
              clubname: setData.clubhomename,
              points: point(newScore[0], newScore[1])
            }
            const clubAway = {
              clubname: setData.clubawayname,
              points: point(newScore[1], newScore[0])
            }

            let selectClubname = 'SELECT * FROM leaguestanding WHERE clubname LIKE '
            let postLeaguestanding = 'INSERT INTO leaguestanding SET ?'
            let updatePoints = 'UPDATE leaguestanding SET points='
            let getStanding = 'SELECT clubname, points, RANK() OVER (ORDER BY points DESC) AS standing FROM leaguestanding'
            let updateStanding = 'UPDATE leaguestanding SET standing='
            
            connection.query(selectClubname+`'%${clubHome.clubname}%'`, (err, result) => {
              if(result.length === 1) {
                const newPoints = Number(result[0].points) + clubHome.points
                connection.query(updatePoints+`'${newPoints}' WHERE clubname='${clubHome.clubname}'`, (err, result) => {
                  if(!err) {
                    connection.query(selectClubname+`'%${clubAway.clubname}%'`, (err, result) => {
                      if(result.length === 1) {
                        const newPoints = Number(result[0].points) + clubAway.points
                        connection.query(updatePoints+`'${newPoints}' WHERE clubname='${clubAway.clubname}'`, (err, result) => {
                          if(!err) {
                            connection.query(getStanding, (err, result) => {
                              if(!err) {
                                result.map((item, index) => {
                                  connection.query(updateStanding+`${item.standing} WHERE clubname='${item.clubname}'`)
                                })
                                resolve(result)
                              }
                            })
                          } else{
                            reject(new Error(errr))
                          }
                        })
                      } else {
                        connection.query(postLeaguestanding, clubAway, (err, result) => {
                            if(!err) {
                              connection.query(getStanding, (err, result) => {
                                if(!err) {
                                  result.map((item, index) => {
                                    connection.query(updateStanding+`${item.standing} WHERE clubname='${item.clubname}'`)
                                  })
                                  resolve(result)
                                }
                              })
                            } else {
                              reject(new Error(err))
                            }
                          }
                        )
                      }
                    })
                  } else{
                    reject(new Error(errr))
                  }
                })
              } else {
                connection.query(postLeaguestanding, clubHome, (err, result) => {
                    if(!err) {
                      connection.query(selectClubname+`'%${clubAway.clubname}%'`, (err, result) => {
                        if(result.length === 1) {
                          const newPoints = Number(result[0].points) + clubAway.points
                          connection.query(updatePoints+`'${newPoints}' WHERE clubname='${clubAway.clubname}'`, (err, result) => {
                            if(!err) {
                              connection.query(getStanding, (err, result) => {
                                if(!err) {
                                  result.map((item, index) => {
                                    connection.query(updateStanding+`${item.standing} WHERE clubname='${item.clubname}'`)
                                  })
                                  resolve(result)
                                }
                              })
                            } else{
                              reject(new Error(errr))
                            }
                          })
                        } else {
                          connection.query(postLeaguestanding, clubAway, (err, result) => {
                              if(!err) {
                                connection.query(getStanding, (err, result) => {
                                  if(!err) {
                                    result.map((item, index) => {
                                      connection.query(updateStanding+`${item.standing} WHERE clubname='${item.clubname}'`)
                                    })
                                    resolve(result)
                                  }
                                })
                              } else {
                                reject(new Error(err))
                              }
                            }
                          )
                        }
                      })
                    } else {
                      reject(new Error(err))
                    }
                  }
                )
              }
            })
           
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}