import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,

    },
    hashPassword: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("TokensRT/AT", moduleSchema)

export default userModel;