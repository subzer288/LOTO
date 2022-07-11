import axios from 'axios';

type Summoner = {
    id: String,
    accountId: String,
    puuid: String,
    name: String,
    profileIconId: Number, 
    revisionDate: Number,
    summonerLevel: Number
  };

type MatchHistory = {
    match: String
}

const API_KEY = 'RGAPI-dfd660e5-b11e-43b0-946e-bde16250a503';

axios.get<Summoner>('https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/LOTO%20BLANC0', {
    headers: { 'X-Riot-Token': API_KEY }
})
.then( response => {
    // handle success
    console.log(response.data);
    axios.get<MatchHistory[]>(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${response.data.puuid}/ids?start=0&count=20&api_key=RGAPI-dfd660e5-b11e-43b0-946e-bde16250a503`, {
        headers: { 'X-Riot-Token': API_KEY }
    }).then( response => {
        console.log(response.data);
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

