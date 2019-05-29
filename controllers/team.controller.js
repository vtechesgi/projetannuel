'use strict'

const Team = require('../models').Team;

class TeamController{

      createTeam(id,area,name,shortName,tla,address,phone,website,email,founded,clubColors,venue,lastUpdated){
            var newTeam = new Team({
                id:id,
                area:area,
                name: name,
                shortName: shortName,
                tla : tla,
                address : address,
                phone : phone,
                website : website,
                email : email,
                founded : founded,
                clubColors : clubColors,
                venue : venue,
                lastUpdated : lastUpdated
            });

        newTeam.save(function(err){
            if(err) throw err;
        });

        return newTeam;
    }
    async getAll(){
        return await Team.find({});
    }
    async getById(id){
        return  Team.findOne({
            id : id
        });
    };
}
module.exports = new TeamController();