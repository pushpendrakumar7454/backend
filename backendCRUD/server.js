const express = require("express")

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("all good")
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.send("ok post")
})

app.listen(3000, () => {
    console.log("server is running on port 300")
})