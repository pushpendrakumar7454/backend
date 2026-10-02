import productModel from "../modules/product.module.js"
import { uploadFile } from "../services/storage.services.js"

export const createProductController=async(req,res)=>{
   try {
      
    const {title,category,brand,description}=req.body

    const fileUrl=await Promise.all(
        req.files.map(async(file)=>{
            const res=await uploadFile({
                buffer:file.buffer,
                fileName:file.originalname
            })

            return res.url
        })
    )

    const products=await productModel.create({
        title,
        category,
        brand,
          description,
        price:{
            amount:req.body.price.amount,
            curreny:req.body.price.curreny
        },
        sizes:req.body.sizes,
        images:fileUrl

    })
     
   return res.status(201).json({
    message:"product created succefully",
    data:products
   })

   } catch (error) {
    return res.status(500).json({
        message:"internal server error"
    })
   }
}

export const findAllProductsControler=async(req,res)=>{
   try {
     
    const products=await productModel.find()

    return res.status(200).json({
        message:"find all product succefully",
        data:products
    })

   } catch (error) {
    return res.status(500).json({
        message:"intternal server error"
    })
   }
}

export const deleteProductController=async(req,res)=>{
    try {
         
        const {id}=req.params

        const product=await productModel.findByIdAndDelete(id)

        return res.status(200).json({
            message:"product delete succefully",
            data:product
        })


    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}