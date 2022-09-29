const express = require('express')
const router = express.Router()
const ctrls = require("../controllers")

router.get("/", ctrls.exercises.index)
router.post("/new", ctrls.exercises.create)

module.exports = router;