/* globals require module String*/
'use strict'
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const fractionSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
        unique:true
    },
    alignment:{
        type: String,
        enum: ['good', 'evil', 'neutral']
    },
    planets:{
        type:[{}],
        default:[]
    },
    members:{
        type: [{}],
        default:[]
    }
});

mongoose.model('Fraction', fractionSchema);
let Fraction = mongoose.model('Fraction');
module.exports = Fraction;