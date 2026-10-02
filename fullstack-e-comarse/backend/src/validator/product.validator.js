import {body,validationResult} from 'express-validator'

const createProductValidator=[
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("title must be strinng").bail()
    .trim()
    .isLength({min:10,max:100}).withMessage("title must be cantain minimum 10 character and maximum 100 character")
    .isAlpha("en-US",{ignore:" "}).withMessage("title can only have small letters and capital letters"),

    body("description")
    .exists().withMessage("description is required").bail()
    .isString().withMessage("description must be String").bail()
    .trim()
    .isLength({min:20,max:500}).withMessage("description must be cantain minimum 20 character and maximum 500 character"),

    body("price.amount")
    .exists().withMessage("amount is required").bail()
    .isFloat({min:0}).withMessage("amount must be a positive number"),

    body("price.currency")
    .exists().withMessage("currency is required").bail()
    .isString().withMessage("currency must be string").bail()
    .isIn(["INR","USD"]).withMessage("currency must be either USD or INR"),

    body("sizes.*.size")
    .exists().withMessage("size is required").bail()
    .isString().withMessage("size must be string").bail()
    .isIn(["XS", "S", "L", "XL", "M", "XL", "XXL"]).withMessage("size must be XS, S, M, L, XL or XXL"),

    body("sizes.*.stock")
    .exists().withMessage("stock is required").bail()
    .isInt({min:0}).withMessage("stock must be a non-negative number"),

    body("brand")
    .exists().withMessage("brand is required").bail()
    .isString().withMessage("brand is must be string").bail()
    .trim(),

    body("category")
    .exists().withMessage("categorry must be required").bail()
    .isString().withMessage("string must be string").bail()
    .trim(),

    (req,res,next)=>{
        const errors=validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid required",
                errors:errors.array()
            })
        }
        next()
    }

]