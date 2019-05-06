'use strict'
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('MatchofDay', new Schema({ 
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
        stage : String,
        groupe : String,
        lastUpdated : String,
        homeTeam : {
            id : 'Number',
            name :String,
        },
        awayTeam : {
            id : 'Number',
            name :String,
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
        }
    }
));