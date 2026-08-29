const express = require("express")
const noteRouter = require("./router/notes.router")
const connectDb = require("./config/db")
const cors = require("cors")

const app = express()
connectDb()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))


app.get("/", (req, res) => {
    res.send("ok got it")
})


app.use("/notes", noteRouter)

module.exports = app