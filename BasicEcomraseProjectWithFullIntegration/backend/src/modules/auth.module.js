import mongoose from "mongoose";

const authSchema=new mongoose.Schema({
    name:{
     type:String,
     required:true,
     minLength:2,
     maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        

    },number:{
        type:String,
        required:true,
        unique:true

    },hashPassword:{
        type:String,
        required:true

    },refreshToken:{
     type:String
    }
}
)

const userModel=mongoose.model("basicAssianmentEcomrase",authSchema)
export default userModel;