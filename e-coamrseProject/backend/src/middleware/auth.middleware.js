import { readAccessToken } from "../../../../practiceProject3E-comarse/backend/src/utils/auth.js";

const authenticate=async(req,res,next)=>{
  try {
      
     const accessToken = req.headers.authorization?.split(" ")[1];

     if(!accessToken){
      return res.status(400).json({
        message:"accessToken not found"
      })
     }

     const decoded=readAccessToken(accessToken)
     req.user=decoded
     next()


  } catch (error) {
    return res.status(500).json({
      message:"token expire"
    })
  }
}

export default authenticate;
