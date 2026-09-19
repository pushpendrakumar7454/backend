import {body,validationResult} from 'express-validator'


export const registerValidator=[
    body("email")
    .exists().withMessage("email is required")
    .trim()
    .isEmail().withMessage("please enter valid formate of email"),

    body("name")
    .exists().withMessage("name is required")
    .isString().withMessage("please enter the password in string")
    .isLength({min:3,max:50}).withMessage("password at least minimum 3 character and 50 maximum character")
    .trim(),


    body("password")
    .exists().withMessage("password is required")
    .isString().withMessage("please enter password in string")
    .trim()
    .isLength({min:6}).withMessage("password is required at least 6 character"),

    (req,res,next)=>{
        const errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                meessage:"invalid requiret",
                errors:errors.array()
            })
        }
        next()
    }





]