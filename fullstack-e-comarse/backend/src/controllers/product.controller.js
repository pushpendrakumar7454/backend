


import {uploadFile} from '../services/storage.services.js'
import productModel from '../modules/product.module.js'
import { fildAllProductController } from '../../../../BasicEcomraseProjectWithFullIntegration/backend/src/controllers/product.controller.js'
export const createProductController=async(rew,res)=>{
    try {
        const {title,description,brand,category}=req.body

    const fileUrl=await Promise.all(
        req.files.map(async(file)=>{
            const responce=await uploadFile({
                buffer:file.buffer,
                fileName:file.orginalName
            }) 

            return responce.url
        })
    )

    const product=await productModel.create({
         title,
         description,
         category,
         brand,
         price:{
            amount:req.body.price.amount,
            currency:req.body.price.currency
         },
         sizes:req.body.sizes,
         images:fileUrl
    })

    return res.status(201).json({
        message:"prodduct is created succefully",
        data:product
    })
         


    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}