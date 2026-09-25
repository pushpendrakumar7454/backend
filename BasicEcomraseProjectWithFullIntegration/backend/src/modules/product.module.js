import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    title:{
      type:String,
      required:true,
      minLength:2,
      maxLength:50
    },
    description:{
        type:String,
        required:true,
        minLength:10,
        maxLength:500
    },
    images:{
        type:[
            {
                type:String
            }
        ],
        validate:{
            validator:images=>images.length<=5,
            message:"images must be at least miximum 5"
        }
    },
    price:{
        amount:{
        type:Number,
        required:true
        },
        currency:{
         type:String,
         required:true,
         enum:["USD","INR"],
         default:"INR"
        }
    },
    sizes:[
        {
            size:{
              type:String,
              required:true
            },
            stock:{
              type:Number,
              min:0,
              default:0

            }
        }
    ]

}) 

const productModel=mongoose.model("basicEcomarseProductModel",productSchema)

export default productModel;