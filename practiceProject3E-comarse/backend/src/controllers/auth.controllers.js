import userModel from "../modules/auth.module.js"
import bycpt from 'bcryptjs'
import { generateAccesToken, generateRefreshToken } from "../utils/auth"

const authRegisterController=async()=>{
    try {
        const {name,email,password,role}=req.body

        const allreadyExistEmail=await userModel.findOne("email")

        if(allreadyExistEmail){
            return res.status(400).json({
                message:"email allready exiits"
            })
        }

        const user=await userModel({
            name,
            email,
            hashPassword:await bycpt.hash(password,6),
            role
        })

        const {accessToken}=generateAccesToken({userId:user._id,role})
        const {refreshToken}=generateRefreshToken({userId:user._id,role})
          
        user.refreshToken=refreshToken
        await user.save()

        res.cookie("refreshToken",refreshToken,({
            httpOnly:true
        }))

        return res.status(201).json({
            message:"user register succefully",
            data:{
                user:{
                    name:user.name,
                    email:user.email,
                    id:user._id,
                    role:user.role
                }
            },
            accessToken
        })


    } catch (error) {
        return res.status(500).json({
            meessagee:"internal server error"
        })
    }

}