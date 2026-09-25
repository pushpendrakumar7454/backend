import {body,validationResult} from 'express-validator'


export const createProductValidator=[
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("title must be string").bail()
    .trim()
    .isLength({min:2,max:50}).withMessage("title must be at least 2 character and maximum 50 character").bail()
    .isAlpha("en-US",{ ignore: " " }).withMessage("title can only have small letters and capital letters"),


    body("description")
    .exists().withMessage("description is required").bail()
    .isString().withMessage("desctiption must be string").bail()
    .trim()
    .isLength({min:10,max:500}).withMessage("desctiption must be at least minimum 10 chacarter and maximum 500 character"),

     body("price.amount")
     .exists().withMessage("amount is required").bail()
     .isFloat({min:0}).withMessage("amount must be a positive number"),

     body("price.currency")
     .exists().withMessage("currency is required").bail()
     .isString().withMessage("currency must be string").bail()
     .trim()
     .isIn(["INR","USD"]).withMessage("currency must be either USD or INR"),

     body("sizes.*.size")
     .exists().withMessage("size is required").bail()
     .isString().withMessage("size must be string").bail()
     .trim()
     .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage("size must be XS, S, M, L, XL or XXL"),

     body("sizes.*.stock")
     .exists().withMessage("stock is required").bail()
     .isInt({ min: 0 })
    .withMessage("stock must be a non-negative number"),

    (req,res,next)=>{
        const errors=validationResult(req)
        if(errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request"
            })
        }
        next()
    }


]