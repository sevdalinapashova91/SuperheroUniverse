/* globals require module String*/
'use strict'
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const powerSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 3,
        maxlength: 35,
        required: true,
        unique:true
    }
});

mongoose.model('Power', powerSchema);
let Power = mongoose.model('Power');
module.exports = Power;