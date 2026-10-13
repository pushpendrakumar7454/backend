import {Router} from 'express'
import productModel from '../models/product.model.js'
import razorpayInstance from '../config/razerpay.js'
import paymentModel from '../models/razerpay.module.js'

const router=Router()

router.post("/:productId/order",async(req,res)=>{
    try {
        const {productId}=req.params

        const product=await productModel.findById(productId)

        if(!product){
            return res.status(404).json({
                message:"product not found"
            })
        }

 const order=await razorpayInstance.create({
    amount:product.price.amount*100,
    currency:product.price.currency,
    receipt:`order_rcptid_${productId}`,
    notes:{
        productId:productId,
        productTitle:product.title
    }
 })

const payment=await paymentModel.create({
    orderId:order.id,
    productId:productId,
    amount:product.price.amount,
    currency:product.price.currency,
    status:"pending"
})

return res.status(201).json(payment)



    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
})


export default router