'use strict'
var url = require("../config").database;
var MongoClient = require('mongodb').MongoClient;
const Country = require('../models').Country;

class CountryController{

      addCountry(name){
            var newCountry = new Country({
                name:name
            });

        newCountry.save(function(err){
            if(err) throw err;
        });

        return newCountry;
      }
      removeCountry(name){
        MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
            if (err) throw err;
            db.country.update({name:{name}});
        })
      }
      async getAll(){
        return await Country.find({});
      }
}
module.exports = new CountryController();