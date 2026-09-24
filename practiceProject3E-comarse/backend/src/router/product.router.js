import {json, Router} from 'express'
import { authenticate } from '../middleware/user.middleware.js';
import multer from 'multer'
import { createProductControler } from '../controllers/product.controller.js';
import { createProductValidator } from '../validator/product.validator.js';


const router=Router()


const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        files:5,
        fileSize:1*2024*2024
    }
})

router.post("/",authenticate,(req,res,next)=>{
    if(req.user.role!=="seller"){
        return res.status(403).json({
            message:"user unothorizes so do not create a product"
        })
    }
    next()
},upload.array("images"),(req,res,next)=>{
    req.body.prize=JSON.parse(req.body.prize),
    req.body.sizes=JSON.parse(req.body.sizes)
    next()
},createProductValidator,createProductControler)



export default router;