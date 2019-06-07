'use strict'

const Match = require('../models').Match;
const MatchOfTheDay = require('../models').MatchOfTheDay;

class MatchController{   
      createMatch(head2head,match){
            var newMatch = new Match({
                head2head:head2head,
                match:match
            });
        
        newMatch.save(function(err){
            if(err) throw err;
        });

        return newMatch;
    };
    async createMatchOfDay(id,competition,season,utcDate,status,stage,group,lastUpdated,homeTeam,awayTeam,score){
        var newMatch = new MatchOfTheDay({
            id : id,
            competition : competition,
            season : season,
            utcDate : utcDate,
            status : status,
            stage : stage,
            group : group,
            lastUpdated : lastUpdated,
            homeTeam : homeTeam,
            awayTeam : awayTeam,
            score : score
        });

        newMatch.save(function(err){
            if(err) throw err;
        });
    };
    async getAll(){
        return await Match.find({});
    };
    async getMatchOfTheDay(){
        return await MatchOfTheDay.find({});
    };
    async getById(id){
        return  Competition.findOne({
            id : id
        });
    };
}
module.exports = new MatchController();