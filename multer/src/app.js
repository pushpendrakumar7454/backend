const express = require("express")
const fileRouter = require("./routes/files.router")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("ok got i")
})

app.use("/file", fileRouter)

module.exports = app