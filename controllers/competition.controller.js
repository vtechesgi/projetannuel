'use strict'

const Competition = require('../models').Competition;

class CompetitionController{

      createCompetition(id,area,name,plan,currentsaison,numberOfAvailableSeasons){
            var newCompetition = new Competition({
                id:id,
                area:area,
                name: name,
                plan: plan,
                currentSaison : currentsaison,
                numberOfAvailableSeasons : numberOfAvailableSeasons
            });

        newCompetition.save(function(err){
            if(err) throw err;
        });

        return newCompetition;
    }
    async getAll(){
        return await Competition.find({});
    }
    async getById(id){
        return  Competition.findOne({
            id : id
        });
    };
}
module.exports = new CompetitionController();