import userModel from "../modules/auth.module.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../utils/auth"
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
   
       createAccessToken({userId:user._id})
       

    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}