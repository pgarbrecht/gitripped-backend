const express = require('express')
const router = express.Router()
const ctrls = require("../controllers")

router.get("/", ctrls.exercises.index)
// IN POSTMAN: do POST and localhost:3003/exercises/new
router.post("/", ctrls.exercises.create)

module.exports = router;