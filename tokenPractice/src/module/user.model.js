import mongoose from 'mongoose'

const userScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("user2", userScheema)

export default userModel;