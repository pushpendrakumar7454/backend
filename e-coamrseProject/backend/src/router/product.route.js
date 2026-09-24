import { Router } from "express";
import authenticate from "../middleware/auth.middleware.js";
import { createProductCoontroller } from "../controllers/product.controllers.js";
import multer from 'multer'
import { createProductValidtar } from "../validator/product.validator.js";


const router = Router();

router.post("/",authenticate,(req,res,next)=>{
    if(req.user.role!=='seller'){
        return res.status(403).json({
            message:"unothorizes user do not creeated a product"
        })
    }
    next()
},createProductCoontroller)
export default router;