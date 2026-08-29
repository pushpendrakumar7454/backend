const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'minimum 10 character are required']
    }
})

const noteModel = mongoose.model("notes", notesSchema)
module.exports = noteModel