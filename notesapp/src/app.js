const express = require("express")
const notesApp = require("./moduls/notes.moduls")
const connectDb = require("./config/db")
const app = express()

app.use(express.json())
connectDb()
app.get("/", (req, res) => {
    res.send("ok got it")
})

app.post("/create", )


module.exports = app;