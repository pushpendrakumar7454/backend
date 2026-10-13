import mongoose from 'mongoose'

const productSchema=({
  title:{
    type:String,
    required:true
  },
  desciption:{
    type:String,
    required:true
  },
  price:{
    amount:{
      type:Number,
      required:true
    },
    currency:{
      type:String,
      default:"INR"
    }
  }
})

const productModel=mongoose.model("RejorpayPRODUCTmodel",productSchema)

export default productModel