const mongoose = require('mongoose');

//CREATE SCHEMA
const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    exerciseImage: {type: String, required: true},
    muscles: {type: String, required: true},
    notes: {type: String},
}, {timestamp: true})
//timestamp will track when the object was made. It will return a date.

//CREATE MODEL
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise