
import { uploadFiles } from "../services/service.storage.js";
import productModel from "../modules/product.model.js";


export const  createProductController=async(req,res)=>{
    try {
          
      const fileUrl=[]

      for(let i=0;i<req.files.length;i++){
        const responce=await uploadFiles({
            buffer:req.files[i].buffer,
            fileName:req.files[i].originalname
        })
        fileUrl.push(responce.url)
      }
      const {title,description}=req.body
      
      const product=await productModel.create({
        title,
        description,
        price:{
            amount:req.body.price.amount,
            currency:req.body.price.currency
        },
        sizes:req.body.size,
        images:fileUrl,
        seller:req.user.userId
      })

      return res.status(201).json({
        message:"product created succefully",
        data:product
      })

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}

export const findALlProductController=async(req,res)=>{
    try {
        const product=await productModel.find()

        return res.status(200).json({
            message:"find all product succefully",
            data:product
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}
            