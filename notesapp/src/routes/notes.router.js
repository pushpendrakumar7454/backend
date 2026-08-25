const express = require('express')
const { createNotesControlles, findNotesControllers, deleteNotesControlles, updateNotesControllers, findNotebyIdControllers, updateNotesByPatchConttrollers } = require('../controlls/notes.controlles')




const router = express.Router({})


router.get("/:id", findNotebyIdControllers)
router.post("/create", createNotesControlles)
router.get("/allnotes", findNotesControllers)
router.delete("/delete/:id", deleteNotesControlles)
router.put("/update/:id", updateNotesControllers)
router.patch("/updatepatch/:id", updateNotesByPatchConttrollers)


module.exports = router