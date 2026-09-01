const { default: mongoose } = require("mongoose");

const instaSchema = new mongoose.Schema({

})
const instaPost = mongoose.model("miniinsta", instaSchema)

module.exports = instaPost