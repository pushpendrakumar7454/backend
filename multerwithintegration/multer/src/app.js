const express = require("express")
const fileRouter = require("./router/file.router")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))
app.get("/", (req, res) => {
    res.send("ok got it")
})

app.use("/file", fileRouter)

module.exports = app