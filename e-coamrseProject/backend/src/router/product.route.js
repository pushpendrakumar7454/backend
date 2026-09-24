import { Router } from "express";
import authenticate from "../middleware/auth.middleware.js";
import { createProductCoontroller } from "../controllers/product.controllers.js";
import multer from 'multer'
import { createProductValidtar } from "../validator/product.validator.js";
import upload from "../config/multer.js";


const router = Router();

router.post("/",authenticate,(req,res,next)=>{
    if(req.user.role!=='seller'){
        return res.status(403).json({
            message:"unothorizes user do not creeated a product"
        })
    }
    next()
},upload.array('images'),(req,res,next)=>{
    req.body.sizes=JSON.parse(req.body.sizes)
    req.body.price=JSON.parse(req.body.price)
    next()
},createProductCoontroller)

export default router;