'use strict'

const User = require('../models').User;

class UserController{

     async createUser(name,password,email){
        var newUser = new User({
            name:name,
            password: password,
            email: email,
            level: 1
        });

        newUser.save(function(err){
            if(err) throw err;
        });

        return newUser;
    }
    async getById(id){
        return  User.findOne({
            _id : id
        });
    };
    async getByLog(name,password){
        
        return User.findOne({
            email:name,
            password:password
        })
    }
}
module.exports = new UserController();