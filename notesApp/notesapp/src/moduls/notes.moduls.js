const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        minlength: [10, "minimum 10 length require"],
        required: true
    }

})
const notesApp = mongoose.model("notes", notesSchema)

module.exports = notesApp