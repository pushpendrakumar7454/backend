const express = require("express")
const fileroute = require('./router/file.router')

const app = express()


app.use(express.json())
app.get('/', (req, res) => {
    res.send("ok got it")
})

app.use("/file", fileroute)
module.exports = app