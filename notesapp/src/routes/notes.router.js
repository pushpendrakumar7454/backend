const express = require('express')
const { createNotesControlles, findNotesControllers, deleteNotesControlles, updateNotesControllers, findNotebyIdControllers } = require('../controlls/notes.controlles')




const router = express.Router({})


router.get("/:id", findNotebyIdControllers)
router.post("/create", createNotesControlles)
router.get("/allnotes", findNotesControllers)
router.delete("/delete/:id", deleteNotesControlles)
router.put("/update/:id", updateNotesControllers)


module.exports = router