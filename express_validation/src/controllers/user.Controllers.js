import userModel from "../modules/user.module.js";
import byrcpt from 'bcryptjs'
import { generateToken } from "../utils/auth.js";
 
export const userRegisterController = async (req, res) => {
  try {
    const { email, password, number } = req.body;

    

    const allreadyExistEmail=await userModel.findOne({email})

    if(allreadyExistEmail){
        return res.status(401).json({
            message:"email allready exist"
        })
    }

    const user = await userModel.create({
      email,
      password:await byrcpt.hash(password,8),
      number,
    });

    const {accessToken,refreshToken}=generateToken({userId:user._id})
     
    user.refreshToken=refreshToken
    await user.save()
    res.cookie("refreshToken",refreshToken,{
        httpOnly:true
    })


    return res.status(201).json({
      message: "user register seccefully",
      data:{
        name:user.name,
        email:user.email,
        id:user._id
      },
      accessToken
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
