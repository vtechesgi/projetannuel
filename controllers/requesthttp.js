'use strict'

const request = require('request');
const config = require('../config');
const CompetitionController = require('./competition.controller');
const MatchController = require('./match.controller');
const TeamController = require('./team.controller');

class Request{
    allTeam(){
        var options = {
            json : true,
            uri:"https://api.football-data.org/v2/teams",
            headers : {
              'X-Auth-Token' : config.token
            }
        };
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            for(var i = 0;i < body.count; i++ ){
              TeamController.createTeam(body.teams[i]['id'],body.teams[i]['area'],body.teams[i]['name'],body.teams[i]['shortName'],body.teams[i]['tla'],body.teams[i]['address'],body.teams[i]['phone'],body.teams[i]['website'],body.teams[i]['email'],body.teams[i]['founded'],body.teams[i]['clubColors'],body.teams[i]['venue'],body.teams[i]['lastUpdated']);
            }
          }
        }
        request(options,callback);
    }
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
    matchoftheDay(){
      var options = {
        json:true,
        url:"https://api.football-data.org/v2/matches",
        headers : {
            'X-Auth-Token' : config.token
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          for(var i = 0;i < body.count; i++){
            MatchController.createMatchOfDay(response.body.matches[i].id,response.body.matches[i].competition,response.body.matches[i].season,response.body.matches[i].utcDate,response.body.matches[i].status,response.body.matches[i].stage,response.body.matches[i].groupe,response.body.matches[i].lastUpdated,response.body.matches[i].homeTeam,response.body.matches[i].awayTeam,response.body.matches[i].score)
          }
        }
      }

    request(options,callback);
    }
}
module.exports = new Request();