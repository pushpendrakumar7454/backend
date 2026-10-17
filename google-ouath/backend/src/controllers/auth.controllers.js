import authModel from "../modules/auth.modules.js";
import bycrpt from 'bcryptjs'
import { readAccessToken, readRefreshToken, verfyRefreshToken } from "../utils/auth.utils.js";
import userModel from "../../../../BasicEcomraseProjectWithFullIntegration/backend/src/modules/auth.module.js";

export const authRegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const allreadyExistEmail = await authModel.findOne({ email });
    if (allreadyExistEmail) {
      return res.status(400).json({
        message: "email allreadt exist",
      });
    }

    const user=await authModel.create({
        name,
        email,
        password:await bycrpt.hash(password,6) 
    })


   const accessToken=readAccessToken({userId:user._id})
   const refreshToken=readRefreshToken({userId:user._id})

   res.cookie("refreshToken",{
    httpOnly:true
   })

   await authModel.findByIdAndUpdate(user._id,{refreshToken})
   return res.status(201).json({
    message:"user created sucessfully",
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
      message: "internal server error",
    });
  }
};


export const authLoginController=async(req,res)=>{
    try {
        
  const{email,password}=req.body

  const user=await authModel.findOne({email})

  if(!user){
    return res.status(400).json({
        message:"user not found"
    })
  }


  const isValidPassword=await bycrpt.compare(password,user.password)

  if(!isValidPassword){
    return res.status(400).json({
        message:"password is wrong"
    })
  }

  const accessToken=readAccessToken({userId:user._id})
  const refreshToken=readRefreshToken({userId:user._id})
   
  res.cookie("refreshToken",{
    httpOnly:true
  })

  await authModel.findOneAndUpdate({email},{refreshToken})

  return res.status(200).json({
    message:"user logedIn succefully",
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


export const authRefreshcontroller=async(req,res)=>{

    const refreshToken=req.cookies.refreshToken

    if(!refreshToken){
        return res.status(404).json({
            message:"refresh token not found"
        })
    }

    try {

       const decoded= verfyRefreshToken(refreshToken)
       const {userId}=decoded

       const user=await authModel.findById(userId)

       if(!user){
        return res.status(404).json({
            message:"user not found"
        })
       }
    if(refreshToken!==user.refreshToken){
        await authModel.findByIdAndUpdate(user._id,{refreshToken:null})

        return res.status(400).json({
            message:"refreshToken mismatch"
        })
    }
      
    const accessToken=readAccessToken({userId:user._id})
    const newRefreshToken=readRefreshToken({userId:user._id})
     

    res.cookie("refreshToken",{newRefreshToken},{
        httpOnly:true
    })

    await authModel.findByIdAndUpdate(user._id,{newRefreshToken})

    return res.status(200).json({
        message:"refresh token roteted",
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