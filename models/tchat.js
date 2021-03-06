'use strict'
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Tchat', new Schema({ 
        id : 'Number',
        name : String,
        idMatch : 'Number',
        viewers:[
            {
                id : 'Number',
                message : String
            }
        ]
    })); 