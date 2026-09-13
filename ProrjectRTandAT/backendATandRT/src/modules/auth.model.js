import mongoose from 'mongoose'

const authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50
    },
    email:{
        type:String,
        required:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    hashPassword:{
        type:String,
        required:true
    },refreshToken:{
        type:String
    }
})

const authModel=mongoose.model("projectToken",authSchema)

export default authModel;