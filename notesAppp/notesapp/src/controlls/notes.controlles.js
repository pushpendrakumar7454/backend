const notesApp = require("../moduls/notes.moduls")

const createNotesControlles = async(req, res) => {
    try {
        const { title, description } = req.body
        const notes = await notesApp.create({
            title,
            description
        })

        return res.status(201).json({
            message: "notes create succefully",
            data: notes
        })
    } catch (error) {

        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const findNotesControllers = async(req, res) => {
    try {
        const notes = await notesApp.find()
        return res.status(200).json({
            message: "notes find successfully",
            data: notes
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const findNotebyIdControllers = async(req, res) => {
    try {
        const { id } = req.params
        const notes = await notesApp.findById(id)
        return res.status(200).json({
            message: "note find succefully",
            data: notes
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })

    }
}


const updateNotesControllers = async(req, res) => {
    try {
        const { id } = req.params
        const body = req.body;
        const notes = await notesApp.findByIdAndUpdate(id, body, { new: true })
        return res.status(200).json({
            message: "notee update succefully",
            data: notes
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}
const updateNotesByPatchConttrollers = async(req, res) => {
    try {

        const { id } = req.params
        const body = req.body
        const notes = await notesApp.findByIdAndUpdate(id, body, { new: true })

        res.status(200).json({
            message: "not update succefully",
            data: notes
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const deleteNotesControlles = async(req, res) => {
    try {
        const { id } = req.params;
        const notes = await notesApp.findByIdAndDelete(id)
        return res.status(200).json({
            message: "notes deleted succefully",
            data: notes
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
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