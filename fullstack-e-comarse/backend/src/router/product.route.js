import {Router} from 'express'
import { authenticate,sellerAuthencticate } from '../middleware/auth.middleware.js'
import upload from "../config/multer.js";
import { createProductController, findAllProductsControler } from '../controllers/product.controller.js';
import {createProductValidator} from '../validator/product.validator.js'
const router =Router()

router.post("/",authenticate,sellerAuthencticate,upload.array("images"),(req,res,next)=>{
    req.body.sizes=JSON.parse(req.body.sizes),
    req.body.price=JSON.parse(req.body.price)
    next()
},createProductValidator,createProductController)
router.get("/find",authenticate,findAllProductsControler)

export default router