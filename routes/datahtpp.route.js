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

///////////////AREA///////////////////
router.get('/areas',async (req,res)=>{
  request({
    json : true,
    uri: "https://api.football-data.org/v2/areas",
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
      message : "Probleme de récupération des données."
    })
   }
   else res.json(body.areas) ;
  });
})
/////////////////TEAMS///////////////
router.get('/teams/:id',async (req,res)=>{
  request({
    json : true,
    uri: "https://api.football-data.org/v2/teams/" + req.params.id,
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
      message : "Probleme de récupération des données."
    })
   }
   else res.json(body) ;
  });
})
router.get('/teams',async(req,res)=>{
  MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("currentfoot");
    //Delete the "customers" collection:
    dbo.collection("teams").drop(function(err, delOK) {
      if (delOK){
        console.log("Collection deleted");
      } 
      Request.allTeam();
      res.json({
        message: "Récupération des données réussies",
        status: 200
    });
      db.close();
    });
  });
})
/////////////////MATCHES///////////////
router.get('/matches',async (req,res)=>{
  var before = false;
  MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("currentfoot");
    //Delete the "customers" collection:
    dbo.collection("matchofdays").drop(function(err, delOK) {
      if (delOK){
        console.log("Collection deleted");
      } 
      const result = Request.matchoftheDay();
      Request.matchoftheDay(function(result,err){
        if(result){
          res.json({
            message: "Récupération des données réussies",
            status: 200
        });
        if(err){
          res.json({
            message: err,
            status: 404
        });
        }
        }
      });
      
      db.close();
    });
  });
    
})
router.get('/matchs/:id/',async(req,res)=>{    //matchs par id
  request({
    json : true,
    uri: "https://api.football-data.org/v2/matches/" + req.params.id,
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
    message : "Probleme de récupération des données."
    }) 
  }
  else res.json(body.matches) ;
  });
})
/////////////////COMPETITIONS///////////////
router.get('/competitions/:id/matchs',async(req,res)=>{    //matchs par competition
  request({
    json : true,
    uri: "https://api.football-data.org/v2/competitions/" + req.params.id + "/matches",
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
    message : "Probleme de récupération des données."
    }) 
  }
  else res.json(body.matches) ;
  });
})
router.get('/competitions/:id/standings',async(req,res)=>{      //classement par comeptition
  request({
    json : true,
    uri: "https://api.football-data.org/v2/competitions/" + req.params.id + "/standings",
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
      message : "Probleme de récupération des données."
    })
  }
  else res.json(body.standings) ;
  });
})
router.get('/competitions/:id/scorers',async(req,res)=>{      //buts par competitions
  request({
    json : true,
    uri: "https://api.football-data.org/v2/competitions/" + req.params.id + "/scorers",
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) {
    res.json({
      message : "Probleme de récupération des données."
    })
  }
  else res.json(body.scorers) ;
  });
})
router.get('/competitions/:id/teams',async(req,res)=>{    //team par competitions
  request({
    json : true,
    uri: "https://api.football-data.org/v2/competitions/" + req.params.id + "/teams",
    headers : {
      'X-Auth-Token' : config.token
    }
  }, (err, result, body) => {
  if (err) { 
    res.json({
      message : "Probleme de récupération des données."
    })
  }
  else res.json(body.teams) ;
  });
})
router.get('/competitions',async(req,res)=>{            //competitions
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


