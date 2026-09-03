import express from 'express'
import jwt from 'jsonwebtoken'
import userModel from './module/user.model.js'


const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("ok got it")
})

app.post("/api/register", async(req, res) => {
    const { email, name, password } = req.body

    const user = await userModel.create({
        email,
        name,
        password
    })

    const token = jwt.sign({
        id: user._id
    }, "7d35f95bbb71aa61a7ca6b74ca22974c1909b7bb432ab9d2379843fc63d697fcf9e5b4da8122062b")

    res.status(201).json({
        message: "token created sucefully",
        data: {
            user: { name, email, id: user._id },
            token
        },
    })
})


app.get("/api/allusers", async(req, res) => {
    try {
        const user = await userModel.find()
        res.status(200).json({
            message: "find all users",
            data: {
                user
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
})

app.get("/api/me", async(req, res) => {
    try {
        const authHeaders = req.headers.authorization
        console.log(authHeaders)

        const data = jwt.decode(authHeaders)
        console.log(data)

        const user = await userModel.findById(data.id)
        console.log(user)
        console.log("AUTH:", authHeaders)
        console.log("DATA:", data)


    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
})

export default app