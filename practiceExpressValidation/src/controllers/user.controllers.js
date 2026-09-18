import userModel from "../modules/user.module.js"
import bcypt from 'bcrypt'
import { generateUserToken } from "../utils/auth.js"
export const userRegisterController=async(req,res)=>{
    try {
         const {email,number,password}=req.body


         const allredytexiistEmail=await userModel.findOne({email})

         if(allredytexiistEmail){
            return res.status(409).json({
                message:"email  allready exist"
            })
         }

         const user=await userModel.create({
            email,
            number,
            password:await bcypt.hash(password,8)
         })

       const{accessToken,refreshToken}= generateUserToken({userId:user._id})

       user.refreshToken=refreshToken
       await user.save()

       res.cookie("refreshToken",refreshToken,{
        httpOnly:true
       })

       return res.status(201).json({
        message:"user reggister succefully",
        data:{
            user
        },
        accessToken
       })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}