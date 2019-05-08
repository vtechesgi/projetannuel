'use strict'
var url = require("../config").database;
var MongoClient = require('mongodb').MongoClient;

var express = require('express');
var router = express.Router();
var request = require('request')
const config = require('../config')
var CompetitionController = require('../controllers/competition.controller');
var MatchController = require('../controllers/match.controller');
var TeamController = require('../controllers/team.controller');
var Competition = require('../models/competition');
var Request = require('../controllers/requesthttp')

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/teams',async(req,res)=>{
    const teams = await TeamController.getAll();
    if(teams === null){
        res.json({
            message : "erreur lors du chargement des données"
        })
    }
    res.json(teams);
});
router.get('/dailymatchs',async(req,res)=>{
    const matchs = await MatchController.getMatchOfTheDay();
    if(matchs === null){
        res.json({
            message : "erreur lors du chargement des données"
        });
    }
     res.json(matchs);
});
router.get('/competitions/:id',async (req,res)=>{
    const competitions = await CompetitionController.getById(req.params.id);
    if(competitions === null){
        res.json({
            message : "erreur lors du chargement des données"
        });
    }
     res.json(competitions);
});

router.get('/competitions',async (req,res)=>{
    const competitions = await CompetitionController.getAll();
    if(competitions === null){
        res.json({
            message : "erreur lors du chargement des données"
        });
    }
     res.json(competitions);
});



module.exports = router;