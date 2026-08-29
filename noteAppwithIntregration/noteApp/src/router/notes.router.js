const express = require("express")
const {
    createNoteControllers,
    findNotesControllers,
    findNoteByIdControllers,
    updateNoteControllers,
    updateNoteByPatchControllers,
    deleteNoteControllers
} = require("../controllers/notes.controllers")

const router = express.Router()
router.get("/allnotes", findNotesControllers, )
router.post("/create", createNoteControllers)
router.put("/update/:id", updateNoteControllers, )
router.delete("/delete/:id", deleteNoteControllers)

module.exports = router