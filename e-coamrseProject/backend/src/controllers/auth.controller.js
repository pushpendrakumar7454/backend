import userModel from "../modules/user.modulee.js"
import bycprt from 'bcryptjs'
import { createAccessToken, createRefreshToken } from "../utils/auth.js"


export const authRegisterController=async(req,res)=>{
    try {
        const {name,password,email}=req.body


        const alllreadyExistUser=await userModel.findOne({email})

        if(alllreadyExistUser){
            return res.status(400).json({
                message:"email allready exists",
                errors:[
                    {
                        field:"email",
                        message:"user allready exist eith email"
                    }
                ]
            })
        }
   const user= await userModel.create({
    email,
    name,
    hashPassword:await bycprt.hash(password,6)
   })

const {accessToken}= createAccessToken({userId:user._id,role:user.role})
const {refreshToken}=createRefreshToken({userId:user._id,role:user.role})

user.refreshToken=refreshToken
await user.save()

   res.cookie("refreshToken",refreshToken,{
    httpOnly:true
   })


    return res.status(201).json({
            message: "user registered successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email,
                    role: user.role
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