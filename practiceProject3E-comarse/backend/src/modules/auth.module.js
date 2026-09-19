import mongoose from "mongoose";


const authSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,

    },
    hashPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user",
        enum:['user','seller']
    },
    refreshToken:{
        type:String
    }
})

const userModel=mongoose.model("project3PracticeEcomarseProject",authSchema)

export default userModel