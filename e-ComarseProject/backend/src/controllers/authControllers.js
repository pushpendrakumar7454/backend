import authModel from "../modules/auth.module.js"

export const authRegisterController=async(req,res)=>{
    try {
        const {email,password,number,name}=req.body

        const allReadyExistEmail=await authModel.findOne({email})

        if(allReadyExistEmail){
            return res.status(401).json({
                message:"email allready exist"
            })
        }

        
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}