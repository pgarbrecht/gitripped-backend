const express = require('express')
const router = express.Router()
const ctrls = require("../controllers")

router.get("/", ctrls.exercises.index)
router.post("/", ctrls.exercises.create)
router.put('/:id', ctrls.exercises.update)
router.delete("/:id", ctrls.exercises.destroy)

module.exports = router;