const express = require("express")
const connectDb = require('./config/db')
const app = express()



connectDb()

app.get("/", (req, res) => {
    res.send("all good")
})

module.exports = app;