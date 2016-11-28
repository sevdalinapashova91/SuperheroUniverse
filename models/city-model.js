/* globals require module, String*/
'use strict'
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const citySchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
        unique:true
    }
});
mongoose.model('City', citySchema);
let City = mongoose.model('City');
module.exports = City;