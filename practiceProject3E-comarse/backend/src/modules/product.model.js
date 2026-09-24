import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100
    },
   description:{
        type:String,
        required:true,
        minLength:10,
        maxLength:500
    },
    images:{
        type:[{
            type:String
        }],
        validate:{
            validator:images=>images.length<=5,
            message:"product contaion at least 5 images"
        }
    },
    price:{
        amount:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            enum:['INR',"USD"],
            default:"INR"
        }
    },
    sizes:[
        {
            size:{
                type:String,
                enum:["S","XS","L","XL","XL","XXL"],
                required:true
            },
            stock:{
                type:Number,
                min:0,
                default:0
            }
        }
    ],
    seller:{
        type:mongoose.Types.ObjectId,
        ref:"project3PracticeEcomarseProject",
        required:true
    }

})

const productModel=mongoose.model("productDeatailDataBase",productSchema)
export default productModel