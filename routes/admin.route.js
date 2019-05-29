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
var CountrysController = require('../controllers/country.controller')
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/countrys',async(req,res)=>{
    const countrys = await CountrysController.getAll();
    if(countrys === null){
        res.json({
            message : "erreur lors du chargement des données"
        })
    }
    res.json(countrys);
});
router.get('/countrys/:country',async(req,res)=>{
    const countrys = await CountrysController.addCountry(req.params.country);
    if(countrys === null){
        res.json({
            message : "erreur lors du chargement des données"
        });
    }
     res.json(countrys);
});
router.get('/countrys/remove/:country',async(req,res)=>{
    MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
        if (err) throw err;
        var dbo = db.db("currentfoot");
        dbo.collection("countries").deleteOne({name:req.params.country},function(err,delOk){
            if (delOk.deletedCount>0){
                res.json({
                    message :"Country deleted"
              });}
              else{
                res.json({
                    message :"Error"
              });}
        })
    })
})
module.exports =router;