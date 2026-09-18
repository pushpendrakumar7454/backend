import userModel from "../modules/user.module.js"
import bcypt from 'bcrypt'
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
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}