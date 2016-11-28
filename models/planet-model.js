/* globals require module String*/
'use strict'
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const planetSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
        unique:true
    }
});
mongoose.model('Planet', planetSchema);
let Planet = mongoose.model('Planet');
module.exports = Planet;