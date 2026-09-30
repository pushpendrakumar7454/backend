export const authRegisterController=async(req,res)=>{
    try {
        const {email,password,number}
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
}