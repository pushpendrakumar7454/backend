const express = require("express")


const app = express()
app.use(express.json())

let users = []

app.get("/", (req, res) => {
    res.send(users)
})


app.post('/create', (req, res) => {
    let body = req.body
    users.push(body)
    res.send("users saved succefully")
})

app.delete('/delete/:id', (req, res) => {
    let { id } = req.params
    let userData = users.filter((u) => u.id !== id)
    users = userData
    res.send("user deleted succefully")
})


app.put('/update/:id', (req, res) => {

    let { id } = req.params
    let userData = users.map((u) => u.id === id ? req.body : u)
    users = userData
    res.send("user update succefully")
})

const port = 3000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})