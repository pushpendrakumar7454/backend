import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("ok got it")
})


app.post("/api/register", (req, res) => {
    const { email, name, password } = req.body


    const token = jwt.sign({
        email,
        name
    }, "7d35f95bbb71aa61a7ca6b74ca22974c1909b7bb432ab9d2379843fc63d697fcf9e5b4da8122062b")

    res.status(201).json({
        message: "token created sucefully",
        data: {
            user: { name, email },
            token
        },
    })
})

export default app