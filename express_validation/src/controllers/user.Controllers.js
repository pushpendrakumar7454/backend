import userModel from "../modules/user.module.js"

export const userRegisterController=async(req,res)=>{
    try {
        const {email,password,number}=req.body

        const allreadyExistEmail=await userModel.findOne({email})

        if(allreadyExistEmail){
            return res.status({
                message:"email allready exist"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}