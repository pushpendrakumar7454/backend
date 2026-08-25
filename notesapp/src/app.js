const express = require("express")
const notesApp = require("./moduls/notes.moduls")
const connectDb = require("./config/db")
const createNotesControlles = require("./controlls/notes.controlles")
const app = express()

app.use(express.json())
connectDb()
app.get("/", (req, res) => {
    res.send("ok got it")
})

app.post("/create", createNotesControlles)


module.exports = app;