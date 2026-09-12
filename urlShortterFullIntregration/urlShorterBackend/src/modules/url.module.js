import mongoose from "mongoose";

const urlScheme=new mongoose.Schema({
    orginalUrl:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true
    },
    clickes:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const urlModel=mongoose.model("urlModel",urlSchema)

export default urlModel