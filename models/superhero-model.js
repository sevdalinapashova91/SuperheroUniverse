/* globals require module String*/
"use strict";
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const superheroSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
    secretIdentity:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    city:{
        type: [{}],
        required:true
    },
    alignent:{
        type: String,
        required: true,
        enum: ['good', 'evil', 'neutral']
    },
    story:{
        type: String,
        required: true,
        minlength: 1
    },
    image:{
        type: String,
        required: true
    },
    powers:{
        type:[{}],
        default:[]
    },
    fractions:{
        type:[{}],
        default:[]
    }
});

mongoose.model('Superhero', superheroSchema);
let Superhero = mongoose.model('Superhero');
module.exports = Superhero;