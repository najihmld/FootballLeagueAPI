# Running
```sh
git clone https://github.com/najihmld/FootballLeagueAPI.git
cd FootballLeagueAPI
yarn install
yarn start
```

# API
## 1.RecordGame
```
POST: http://localhost:3002/recordgame
#Example body parameter
 	- clubhomename : Chelsea
 	- clubawayname : Man Utd
 	- score : '1:2'
```

## 2. AllLeagueStandings
```
GET: http://localhost:3002/leaguestanding
#Example response
{
    "status": 200,
    "data": [
        {
            "clubname": "Arsenal",
            "points": 0
        },
        {
            "clubname": "Chelsea",
            "points": 3
        },
        {
            "clubname": "Man Utd",
            "points": 7
        },
        {
            "clubname": "Juventus",
            "points": 0
        },
        {
            "clubname": "Real Madrid",
            "points": 1
        }
    ]
}
```

## 3. ClubStandings
```
GET: http://localhost:3002/rank?clubname=Chelsea
#Example response
{
    "status": 200,
    "data": [
        {
            "clubname": "Chelsea",
            "standing": 2
        }
    ]
}
```


