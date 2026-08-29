const express = require("express")
const connectDb = require("./config/db")
const notesRouter = require("./routes/notes.router")
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
}))


app.get("/", (req, res) => {
    res.send("Server is running")
})
app.use(express.json())

connectDb()

app.use("/notes", notesRouter)





module.exports = app;