const express = require("express")
const connectDb = require('./config/db')
const notesModel = require("./models/note.models")
const app = express()
app.use(express.json())



connectDb()

app.get("/", async(req, res) => {
    const notes = await notesModel.find();
    res.send({
        success: true,
        data: notes
    });
});


app.post('/create', async(req, res) => {
    let { title, description } = req.body
    const newNote = await notesModel.create({
        title,
        description
    })

    res.send({
        success: true,
        massage: "notes created succefully",
        data: newNote
    })


})

module.exports = app;