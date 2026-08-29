const noteModel = require("../module/notes.module")


// CREATE NOTE
const createNoteControllers = async(req, res) => {
    try {
        const { title, description } = req.body

        const notes = await noteModel.create({
            title,
            description
        })

        return res.status(201).json({
            message: "notes created successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


// GET ALL NOTES
const findNotesControllers = async(req, res) => {
    try {
        const notes = await noteModel.find()

        return res.status(200).json({
            message: "notes found successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


// GET NOTE BY ID
const findNoteByIdControllers = async(req, res) => {
    try {
        const { id } = req.params

        const note = await noteModel.findById(id)

        if (!note) {
            return res.status(404).json({
                message: "note not found"
            })
        }

        return res.status(200).json({
            message: "note found successfully",
            data: note
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


// UPDATE NOTE - PUT
const updateNoteControllers = async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const note = await noteModel.findByIdAndUpdate(id, body, { new: true })


        if (!note) {
            return res.status(404).json({
                message: "note not found"
            })
        }

        return res.status(200).json({
            message: "note updated successfully",
            data: note
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


// UPDATE NOTE - PATCH
const updateNoteByPatchControllers = async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const note = await noteModel.findByIdAndUpdate(
            id,
            body, {
                new: true,
                runValidators: true
            }
        )

        if (!note) {
            return res.status(404).json({
                message: "note not found"
            })
        }

        return res.status(200).json({
            message: "note updated successfully",
            data: note
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


// DELETE NOTE
const deleteNoteControllers = async(req, res) => {
    try {
        const { id } = req.params

        const note = await noteModel.findByIdAndDelete(id)

        if (!note) {
            return res.status(404).json({
                message: "note not found"
            })
        }

        return res.status(200).json({
            message: "note deleted successfully",
            data: note
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: "internal server error"
        })
    }
}


module.exports = {
    createNoteControllers,
    findNotesControllers,
    findNoteByIdControllers,
    updateNoteControllers,
    updateNoteByPatchControllers,
    deleteNoteControllers
}