import authModel from "../modules/auth.model.js"
import byrcpt from 'bcrypt'
import { generateToken } from "../utils/auth.js"
export const createRegisterController=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        const allreadyExistEmail=await authModel.findOne({email})

        if(allreadyExistEmail){
            return res.status(400).json({
                message:"email allready exist"
            })
        }

        const user=await authModel.create({
            name,
            email,
            hashPassword:await byrcpt.hash(password,10) 
        })

       const{accessToken,refreshToken}= generateToken({userId:user._id})

       user.refreshToken=refreshToken
       await user.save()

       res.cookie("refreshToken",refreshToken)

       return res.status(201).json({
        message:"user register seccefully",
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

export const meAuthConteroller=async(req,res)=>{
    try {
        return res.status(200).json({
            message:"user find succefuuly",
            data:{
                user:req.user
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}