import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    hashPassword: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
})

const userModel = mongoose.model("TokensRT/AT", moduleSchema)

export default userModel;