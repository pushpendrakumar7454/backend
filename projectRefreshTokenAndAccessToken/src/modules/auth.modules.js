import mongoose  from "mongoose";


const authSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:50,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    hashPassword:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }

})

const authModel=mongoose.model("projectAuth",authSchema)

export default authModel