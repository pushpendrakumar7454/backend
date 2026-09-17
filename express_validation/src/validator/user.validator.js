import {body,validationResult} from 'express-validator'


export const registerValider=[
    body("email")
    .exists().withMessage("email is required")
    .isEmail().withMessage("inalvid email address"),

    body("number")
    .exists().withMessage("phone number is required")
    .isMobilePhone().withMessage("phone number is required"),

    body("password")
    .exists().withMessage("password is required")
    .trim().isLength({min:8}).withMessage("password at least 8 character"),

    (req,res,next)=>{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
            message:"invalid requirt",
            errors:errors.array()
        })
        }
        
     next()       
    }


]