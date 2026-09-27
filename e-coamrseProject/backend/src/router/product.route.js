import { Router } from "express";
import authenticate, { authenticateSeller } from "../middleware/auth.middleware.js";
import { createProductCoontroller, listALlProducts, listAllProducttoSeller, listProduct, unlistProduct } from "../controllers/product.controllers.js";
import {createProductValidator, listProductValidator, unlistProductValidator} from '../validator/product.validator.js'


import upload from "../config/multer.js";


const router = Router();

router.post("/",authenticate,authenticateSeller,upload.array('images'),(req,res,next)=>{
    req.body.sizes=JSON.parse(req.body.sizes)
    req.body.price=JSON.parse(req.body.price)
    next()
},createProductValidator,createProductCoontroller)


router.get("/",authenticate,listALlProducts)
router.get("/seller",authenticate,authenticateSeller,listAllProducttoSeller)
router.patch("/unlist/:id",authenticate,authenticateSeller,unlistProductValidator,unlistProduct)
router.patch("/list/:id",authenticate,authenticateSeller,listProductValidator,listProduct)
export default router;