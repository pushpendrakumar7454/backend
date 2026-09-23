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
    .trim()
    .isString().withMessage("emial must be string"),

    body("number")
    .exists().withMessage("number is required").bail()
    .isMobilePhone().withMessage("please enter a phone number").bail()
    .trim()
    .isString().withMessage("number must be string"),

    body("password")
    .exists().withMessage("password is required").bail()
    .trim()
    .isString().withMessage("password must be string").bail()
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
    .trim()
    .isString().withMessage("email must be string"),

    body("password").bail()
    .exists().withMessage("password is required").bail()
    .trim()
    .isLength({min:6}).withMessage("password must be at least 6 character").bail()
    .isString().withMessage("password must be string"),

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