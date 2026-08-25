const express = require('express')
const createNotesControlles = require('../controlls/notes.controlles')



const router = express.Router({})

router.post("/create", createNotesControlles)

module.exports = router