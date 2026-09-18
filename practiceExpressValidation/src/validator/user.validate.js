import {body,validationResult} from 'express-validator'


export const registerUserValidator=[
    body("email")
    .exists().withMessage("email filed is required")
    .isEmail().withMessage("please enter validd email format"),

    body("number")
    .exists().withMessage("phone number is required")
    .isMobilePhone().withMessage("please enter phone number is valid"),

    body("password")
    .exists().withMessage("password is required")
    .trim().isLength({min:8}).withMessage("password at least 8 character"),

    (req,res,next)=>{
        let errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"inalid request",
                errors:errors.array()
            })
        }
        next()
    }
]