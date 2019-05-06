'use strict'
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Competition', new Schema({ 
  id: {
      type : 'Number',
    },
  area: { 
        id : 'Number',
        name : String,
        },
  name : String,
  plan : String,
  currentSaison : {
        id : 'Number',
        startDate : String,
        endDate : String,
        currentMatchDay : 'Number',
        winner : {
            id : 'Number',
            name: String,
            url:String,
        },
  },
  seasonumberOfAvailableSeasonsns : 'Number'

}));