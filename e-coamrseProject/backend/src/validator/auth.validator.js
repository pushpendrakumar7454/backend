import {body,validationResult} from 'express-validator'

export const registerValidattor=[
    body("email")
    .exists().withMessage("email is required").bail()
    .trim()
    .isEmail().withMessage("please enter valid email "),

    body("name")
    .exists().withMessage("name is required").bail()
    .isString().withMessage("name must be sttring")
    .trim()
    .isLength({min:2,max:50}).withMessage("name must be at least minimum 2 charactter and maximum 50 character"),

    body("password")

    .exists().withMessage("password is required").bail()
    .isString().withMessage("password must be required string")
    .trim()
    .isLength({min:6}).withMessage("password at least 6 character"),

    (req,res,next)=>{
        const errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid requirety",
                errors:errors.array()
            })
        }
        next()
    }


    


]