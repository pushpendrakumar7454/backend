import {json, Router} from 'express'
import { authenticate } from '../middleware/user.middleware.js';
import { createProductControler } from '../controllers/product.controller.js';
import { createProductValidator } from '../validator/product.validator.js';
import upload from '../config/multer.js';


const router=Router()

router.post("/",authenticate,(req,res,next)=>{
    if(req.user.role!=="seller"){
        return res.status(403).json({
            message:"unothorized user so do not createed a product"
        })
    }next()
},upload.array("images"),createProductControler)

export default router;