
import authModel from '../modules/auth.modules.js'
import { varifyAccessToken } from '../utils/auth.js'

const authenticate=async(req,res,next)=>{
    try{
   const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(400).json({
            message:"token nott found"
        })
    }
   const decoded=varifyAccessToken(token)
    const user=await authModel.findById(decoded.id)

    req.user=user
    next()


    }catch(error){
        return res.status(500).json({
            message:"token expire"
        })
    }
}

export default authenticate;