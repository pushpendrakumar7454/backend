import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    orginalUrl:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true
    },clicks:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})


const urlModel=mongoose.model("practiceUrlModel",urlSchema)

export default urlModel