'use strict'

const request = require('request');
const config = require('../config');
const CompetitionController = require('./competition.controller');

class Request{
    allcompetitions(){
        var options = {
            json: true,
            uri:"https://api.football-data.org/v2/competitions",
            headers : {
                'X-Auth-Token' : config.token
            }
          };
          function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
              for(var i = 0;i < body.count; i++ ){
                // console.log(i);
                // console.log(response.body.competitions[i]);
                CompetitionController.createCompetition(response.body.competitions[i]['id'],response.body.competitions[i]['area'],response.body.competitions[i]['name'],response.body.competitions[i]['plan'],response.body.competitions[i]['currentSeason'],response.body.competitions[i]['numberOfAvailableSeasons']);
              }
            }
          }
        
          request(options,callback);
    }
}
module.exports = new Request();