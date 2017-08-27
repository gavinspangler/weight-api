'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeightSchema = new Schema({
  name: {
    type: Number,
    Required: true
  },
  datetime: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Weights', WeightSchema);
