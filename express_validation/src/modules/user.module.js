import mongoose from 'mongoose'


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },refreshToken:{
        type:String
    }
})

const userModel=mongoose.model("validationExpress",userSchema)

export default userModel