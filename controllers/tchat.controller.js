'use strict'

const Tchat = require('../models').Tchat;

class TchatController{

      createTchat(idMatch){
            var newTchat = new Tchat({
                idMatch: idMatch
            });

        newTchat.save(function(err){
            if(err) throw err;
        });

        return newTchat;
    }
    addTchat(Tchat,idUser,messageUser){
        
    }
    async getAll(){
        return await Competition.find({});
    }
    async getById(idMatch){
        return  Tchat.findOne({
            idMatch : idMatch
        });
    };
}
module.exports = new TchatController();