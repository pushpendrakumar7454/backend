import authModel from "../modules/auth.model.js"
import { varifyaccessToken } from "../utils/auth.js"

export const authenticate=async(req,res,next)=>{
    try {
         const token = req.headers.authorization.split(" ")[1];
         
         if(!token){
            return res.status(400).json({
                messagee:"token not found"
            })
         }

         const decoded=varifyaccessToken(token)
         const user=await authModel.findById(decoded.id)

         req.user=user
         next()


    } catch (error) {

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Access token expired",
            });
        }

        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}