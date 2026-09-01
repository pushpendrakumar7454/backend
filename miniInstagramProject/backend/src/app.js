const express = require("express")
const connectDb = require("./config/db")
const postRouter = require("../src/router/insta.router")

const app = express()
app.use(express.json())


connectDb()
app.get("/", (req, res) => {
    res.send("ok got it")
})


app.use("/post", postRouter)

module.exports = app