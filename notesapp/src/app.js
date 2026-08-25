const express = require("express")
const connectDb = require("./config/db")
const notesRouter = require("./routes/notes.router")
const dotenv = require("dotenv");

dotenv.config();

const app = express()
app.use(express.json())

connectDb()

app.use("/notes", notesRouter)





module.exports = app;