import authModel from "../modules/auth.modules.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/auth.js"

export const createAuthControllers=async(req,res)=>{
    try {
         const {email,name,password}=req.body

      const emailAllredyExist=await authModel.findOne({email})
        if(emailAllredyExist){
            return res.status(400).json({
                message:"email All ready exist"
            })
        }
         const user=await authModel.create({
           email,
           name,
           hashPassword:await bcrypt.hash(password,10)
         })
     
     const {accessToken,refreshToken}=generateToken({
        userId:user._id
     })
      user.refreshToken=refreshToken
      await user.save()
     res.cookie("refreshToken",refreshToken,{
        httpOnly:true
     })

     return res.status(201).json({
        message:"user creaate",
        data:{
            user:{
                name:user.name,
                email:user.email
            },
            accessToken
        }
     })
      


    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}