import userModel from "../modules/auth.module.js"
import { readAccessToken } from "../utils/auth.js"

export const authenticate=async(req,res,next)=>{
    try{
         const accessToken = req.headers.authorization?.split(" ")[1];

        if(!accessToken){
            return res.status(400).json({
                message:"accessToken not found"
            })
        }

        const decoded=readAccessToken(accessToken)
        req.user=decoded
        next()

    }catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
}


export const authenticateSeller=async(req,res,next)=>{
    if(req.user.role!=="seller"){
      return res.status(403).json({
        message:"unauthorized user"
      })
      next()
    }
}