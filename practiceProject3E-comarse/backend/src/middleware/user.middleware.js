import userModel from "../modules/auth.module.js"
import { readAccessToken } from "../utils/auth.js"

const authenticate=(req,res,next)=>{
    try{
        const accessToken=req.headers.Authenticate.split(" ").[1]

        if(!accessToken){
            return res.status(400).json({
                message:"accessToken not found"
            })
        }

        const decoded=readAccessToken(accessToken)
        const {userId,role}= decoded
      
        const user=await userModel.findById(userId)

        req.user=user
        next()

    }catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
}