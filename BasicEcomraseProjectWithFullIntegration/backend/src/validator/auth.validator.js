import {body,validationResult} from 'express-validator'

export const registerValidator=[
    body("name")
    .exists().withMessage("name se required").bail()
    .isString().withMessage("name must be String").bail()
    .trim()
    .isLength({min:2,max:50}).withMessage("name must be at least minimum 2 chacater and maximum 50 chacracter"),

    body('email')
    .exists().withMessage("email is required").bail()
    .isEmail().withMessage("plese enter a valid email").bail()
    .isString().withMessage("emial must be string")
    .trim(),

    body("number")
    .exists().withMessage("number is required").bail()
    .isMobilePhone().withMessage("please enter a phone number").bail()
    .isString().withMessage("number must be string")
    .trim(),

    body("password")
    .exists().withMessage("password is required").bail()
    .isString().withMessage("password must be string").bail()
    .trim()
    .isLength({min:6}).withMessage("length must be 6 character"),

    (req,res,next)=>{
        let errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid reequest",
                errors:errors.array()
            })
        }
        next()
    }
]


export const loginValidator=[
    body("email").bail()
    .exists().withMessage("email is required").bail()
    .isEmail().withMessage('please enter a valid email').bail()
    .isString().withMessage("email must be string")
    .trim(),

    body("password").bail()
    .exists().withMessage("password is required").bail()
    .isString().withMessage("password must be string")
    .trim()
    .isLength({min:6}).withMessage("password must be at least 6 character").bail(),

    (req,res,next)=>{
        let errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                errors:errors.array()
            })
        }
        next()
    }
]