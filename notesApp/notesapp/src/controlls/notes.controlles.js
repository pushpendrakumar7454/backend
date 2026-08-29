const notesApp = require("../moduls/notes.moduls")

// CREATE NOTE
const createNotesControlles = async(req, res) => {
    try {
        const { title, description } = req.body

        const notes = await notesApp.create({
            title,
            description
        })

        return res.status(201).json({
            message: "Notes created successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


// GET ALL NOTES
const findNotesControllers = async(req, res) => {
    try {
        const notes = await notesApp.find()

        return res.status(200).json({
            message: "Notes found successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


// GET NOTE BY ID
const findNotebyIdControllers = async(req, res) => {
    try {
        const { id } = req.params

        const notes = await notesApp.findById(id)

        if (!notes) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            message: "Note found successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


// UPDATE NOTE - PUT
const updateNotesControllers = async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const notes = await notesApp.findByIdAndUpdate(
            id,
            body, {
                new: true,
                runValidators: true
            }
        )

        if (!notes) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            message: "Note updated successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


// UPDATE NOTE - PATCH
const updateNotesByPatchConttrollers = async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const notes = await notesApp.findByIdAndUpdate(
            id,
            body, {
                new: true,
                runValidators: true
            }
        )

        if (!notes) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            message: "Note updated successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


// DELETE NOTE
const deleteNotesControlles = async(req, res) => {
    try {
        const { id } = req.params

        const notes = await notesApp.findByIdAndDelete(id)

        if (!notes) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            message: "Note deleted successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


module.exports = {
    createNotesControlles,
    findNotesControllers,
    deleteNotesControlles,
    updateNotesControllers,
    findNotebyIdControllers,
    updateNotesByPatchConttrollers
}