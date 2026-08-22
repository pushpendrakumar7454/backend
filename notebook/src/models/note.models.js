const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        minlength: 10
    }
})



const notesModel = mongoose.model("notes", notesSchema)

module.exports = notesModel