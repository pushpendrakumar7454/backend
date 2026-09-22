import {body,validationResult} from 'express-validator'


export const createProductValidtar=[
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("title must be string").bail()
    .trim()
    .isLength({min:2,max:100}).withMessage("title length must be between 2 to 100 character").bail()
    .isAlpha("en-Us",{ignore:" "}).withMessage("title can only have englsh small case and capital case character"),

    body("description")
    .exists().withMessage("des is required").bail()
    .isString().withMessage("desc must be String").bail()
    .trim()
    .isLength({min:20,max:500}).withMessage("desctiption must be minum 20 character and maximum 50 character"),

    body("price.amount")
    .exists().withMessage("price amount is required").bail()
    .isFloat({min:0}).withMessage("price amount must be a floating number").bail(),

    body("price.currency")
    .exists().withMessage("currency is required").bail()
    .isString().withMessage("currency must be a Strring value").bail()
    .isIn(["INR","USD"]).withMessage("currency either be inr or USD"),

    body("sizes")
    .exists().withMessage("sizes is required").bail()
    .isArray().withMessage("sizes must be an array"),

   body("sizes.*.size")
   .exists().withMessage("size is requird").bail()
   .isString().withMessage("size must be string").bail()
   .isIn(["XS", "S", "L", "XL", "XXL"]).withMessage("sizes must s,xs,l,xl,xxl"),

   body("sizes.*.stock")
   .exists().withMessage("stock is required").bail()
   .isInt({min:0}).withMessage("stock is must be a number is not nagative"),

   (req,res,next)=>{
    let errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.states(400).json({
            message:"invalid request",
            errors:errors.array()
        })
    }
    next()
   }

]