const express = require('express')
const Exercise = require('../models/Exercise.js')
const router = express.Router()

router.get('/', (req, res) => {
    Exercise.find(
    {}, (err, allExercises) => {
        res.send('router works')
    })
})

module.exports = router