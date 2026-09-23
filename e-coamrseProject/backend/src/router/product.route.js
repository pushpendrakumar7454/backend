import {Router} from 'express'
import authenticate from '../middleware/auth.middleware.js'
const router=Router()


router.post("/",authenticate,(req,res,next)=>{
    if(req.user.role=="seller"){
       return res.status(403).json({
        message:"user not authorized create product"
       })
    }
    next()
},)

export default router