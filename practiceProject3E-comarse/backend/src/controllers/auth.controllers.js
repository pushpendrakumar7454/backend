import userModel from "../modules/auth.module.js"
import bycpt from 'bcryptjs'
import { generateAccesToken, generateRefreshToken,} from "../utils/auth.js"

export const authRegisterController=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        const allreadyExistEmail=await userModel.findOne({email})

        if(allreadyExistEmail){
            return res.status(400).json({
                message:"email allready exiits"
            })
        }

        const user=await userModel.create({
            name,
            email,
            hashPassword:await bycpt.hash(password,6),
            
        })

        const accessToken=generateAccesToken({userId:user._id,role:user.role})
        const refreshToken=generateRefreshToken({userId:user._id,role:user.role})
          
        await userModel.findByIdAndUpdate(user._id,{refreshToken})

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true
        })

        return res.status(201).json({
            message:"user register succefully",
            data:{
                user:{
                    name:user.name,
                    email:user.email,
                    id:user._id,
                    role:user.role
                },
                accessToken
            },
        })


    } catch (error) {
        return res.status(500).json({
            meessagee:"internal server error"
        })
    }

}


export const loginController=async(req,res)=>{
    try {
        
      const {email,password}=req.body

      const user=await userModel.findOne({email})
      
      if(!user){
        return res.status(400).json({
            message:"invalid email and password"
        })
      }

      const isValidPassword=await  bycpt.compare(password,user.hashPassword)

      if(!isValidPassword){
        return res.status(400).json({
            message:"invalid email and password"
        })
      }

      const accessToken = generateAccesToken({userId:user._id,role:user.role})
      const refreshToken = generateRefreshToken({userId:user._id,role:user.role})
       
      res.cookie("refreshToken",refreshToken,{
        httpOnly:true
      })

      await userModel.findOneAndUpdate({email},{refreshToken})

      return res.status(200).json({
        message:'user login succesfully',
        data:{
            user:{
                name:user.name,
                email:user.email,
                id:user._id,
                role:user.role
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


export const authRefreshController=async(req,res)=>{

    const refreshToken=req.cookies.refreshToken

    if(!refreshToken){
        return res.status(400).json({
            message:"refresh token not found"
        })
    }
    try{

        

    }catch(error){
        return res.status(500).json({
            message:"internal server error"
        })
    }
}