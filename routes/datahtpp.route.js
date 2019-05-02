'use strict'
var url = require("../config").database;
var MongoClient = require('mongodb').MongoClient;

var express = require('express');
var router = express.Router();
var request = require('request')
const config = require('../config')
var CompetitionController = require('../controllers/competition.controller');
var Competition = require('../models/competition');
var Request = require('../controllers/requesthttp')

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/matches',async (req,res)=>{

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.competitions+" database");
    // get reference to collection
    db.collection("users", function(err, collection) {
        // handle the error if any
        if (err) throw err;
        // delete the mongodb collection
        collection.remove({}, function(err, result){
            // handle the error if any
            if (err) throw err;
            console.log("Collection is deleted! "+result);
            // close the connection to db when you are done with it
            db.close();
        });
    });
  });

    var options = {
        url:"https://api.football-data.org/v2/matches",
        headers : {
            'X-Auth-Token' : config.token
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.json(body)
        }
      }

    request(options,callback);
    
})
router.get('/competition/2000',async(req,res)=>{
  var before = false;
  MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("currentfoot");
    //Delete the "customers" collection:
    dbo.collection("competitions").drop(function(err, delOK) {
      if (delOK){
        console.log("Collection deleted");
      } 
      Request.allcompetitions();
      res.json({
        message: "Récupération des données réussies",
        status: 200
    });
      db.close();
    });
  });

  
})

module.exports = router;


