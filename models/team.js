'use strict'
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Team', new Schema({
    id : 'Number',
    area : {
        id : 'Number',
        name : String
    },
    name : String,
    shortName : String,
    tla : String,
    address : String,
    phone : String,
    website : String,
    email : String,
    founded : 'Number',
    clubColors : String,
    venue : String,
    lastUpdated : String
})); 