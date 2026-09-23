import userModel from "../modules/auth.module.js"
import bcrypt from 'bcryptjs'
import { createAccessToken, createRefreshToken } from "../utils/auth.js"
export const authRegisterController=async(req,res)=>{
    try {
          
        const {name,email,password,number}=req.body
        const allreadyExistEmail=await userModel.findOne({email})
        if(allreadyExistEmail){
            return res.status(400).json({
                message:"email allready exist"
            })
        }

        const user=await userModel.create({
            name,
            email,
            number,
            hashPassword:await bcrypt.hash(password,6)
        })
   
     const accessToken=createAccessToken({userId:user._id})
      const refreshToken=createRefreshToken({userId:user._id})

      res.cookie("refreshToken",refreshToken,{
        httpOnly:true
      })

      await userModel.findByIdAndUpdate(user._id,{refreshToken})

      return res.status(201).json({
        message:"user register succefully",
        data:{
            user:{
                name:user.name,
                email:user.email,
                number:user.number,
                id:user._id
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