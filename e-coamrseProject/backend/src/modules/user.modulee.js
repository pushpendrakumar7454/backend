import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    hashPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['seller','user']
    },
    refreshToken:{
        type:String
    }
})

const userModel=mongoose.model("E-comarseFisrtProject",userSchema)

export default userModel