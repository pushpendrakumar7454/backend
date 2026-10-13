import {Router} from 'express'
import productModel from '../models/product.model.js'

const router=Router()

router.post("/",async(req,res)=>{
    try {
        const {productId}=req.body

        const product=await productModel.findById(productId)

        if(!product){
            return res.status(404).json({
                message:"product not found"
            })
        }

        
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
})