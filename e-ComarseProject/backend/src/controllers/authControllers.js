import authModel from "../modules/auth.module.js"
import { generateAccessToken, generateRefreshToken } from "../utils/auth.js"
import bycrpt from 'bcryptjs'
export const authRegisterController=async(req,res)=>{
    try {
        const {email,password,number,name}=req.body

        const allReadyExistEmail=await authModel.findOne({email})

        if(allReadyExistEmail){
            return res.status(401).json({
                message:"email allready exist"
            })
        }

        const user=await authModel.create({
            name,
            email,
            number,
            password:await bycrpt.hash(password,6)
        })

        const accessToken=generateAccessToken({userId:user._id,role:user.role})
        const refreshToken=generateRefreshToken({userId:user._id,role:user.role})

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true
        })

        await authModel.findByIdAndUpdate(user._id,{refreshToken})

        return res.status(201).json({
            message:"user register succesfully",
            data:{
                accessToken,
                user:{
                    name:user.name,
                    id:user._id,
                    email:user.email,
                    role:user.role
                }
            }
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}


