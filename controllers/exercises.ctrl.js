// const express = require('express')
const db = require('../models')
// const router = express.Router()

const index = (req, res) => {
    db.Exercise.find(
        {}, (err, allExercises) => {
            res.send('router works')
    })
}

module.exports = {
    index,
    // create,
    // update,
    // destroy
}