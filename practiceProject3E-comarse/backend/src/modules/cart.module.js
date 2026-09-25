import mongoose from 'mongoose'

const cartSchema=new mongoose.Schema({
    products:[
        {
            product:{
               type:mongoose.Schema.Types.ObjectId,
               required:true
            },
            quantity:{
                 type:Number,
                 min:1,
                 default:1
            },size:{
                type:String,
                enum: ["XS", "S", "M", "L", "XL", "XXL"],

            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const cartModel=mongoose.model("project3MoodelSchema",cartSchema)

export default cartModel