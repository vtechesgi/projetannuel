'use strict'
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Match', new Schema({ 
    head2head: {
        numberOfMatches : 'Number',
        totalGoals : 'Number',
        homeTeam : {
            wins : 'Number',
            draws : 'Number',
            losses : 'Number'
        },
        awayTeam :{
            wins : 'Number',
            draws : 'Number',
            losses : 'Number'
        }
    },
    match: { 
        id : 'Number',
        competition : {
            id : 'Number',
            name : String
        },
        season : {
            id : 'Number',
            startDate : String,
            endDate : String,
            currentMatchday : 'Number',
            availableStages :[String]
        },
        utcDate : String,
        status : String,
        venue: String,
        stage : String,
        group : String,
        lastUpdated : String,
        homeTeam : {
            id : 'Number',
            name :String,
            coach : {
                id : 'Number',
                name : String,
                nationality : String
            },
            captain : {
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            },
            lineup : [{
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            }],
            bench : [{
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            }],

        },
        awayTeam : {
            id : 'Number',
            name :String,
            coach : {
                id : 'Number',
                name : String,
                nationality : String
            },
            captain : {
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            },
            lineup : [{
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            }],
            bench : [{
                id : 'Number',
                name :String,
                shirtNumber : 'Number'
            }],

        },
        score : {
            winner : String,
            duration : String,
            fullTime : {
                homeTeam : 'Number',
                awayTeam : 'Number'
            },
            halfTime : {
                homeTeam : 'Number',
                awayTeam : 'Number'
            },
            extraTime : {
                homeTeam : 'Number',
                awayTeam : 'Number'
            },
            penalties : {
                homeTeam : 'Number',
                awayTeam : 'Number'
            }
        },
        goals : [{
            minute : 'Number',
            extraTime : 'Number',
            type : String,
            team : {
                id : 'Number',
                name : String
            },
            scorer : {
                id : 'Number',
                name : String
            },
            assist : {
                id : 'Number',
                name : String
            },
            bookings : {
                minute : 'Number',
                team : {
                    id : 'Number',
                    name : String
                },
                player: {
                    id : 'Number',
                    name : String
                },
                card : String
            },
            substitutions : [{
                minute : 'Number',
                team : {
                    id : 'Number',
                    name : String
                },
                playerOut : {
                    id : 'Number',
                    name : String
                },
                playerIn : {
                    id : 'Number',
                    name : String
                },
            }]

        }]
    }
}));