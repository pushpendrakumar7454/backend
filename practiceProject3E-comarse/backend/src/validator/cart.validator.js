import {body,validationResult} from 'express-validator'


export const addToCartValidator=[
    body(productId)
    .exists().withMessage("product id is required").bail()
    .isString().withMessage("product must be is string").bail()
    .trim()
    .isMongoId().withMessage("product must be is a mango id"),

    body("quantity")
    .exists().withMessage("quantity is required").bail()
    .isInt({min:1}).withMessage("quantity must be a interger leass than 1"),

    body("size")
    .exists().withMessage("size is required").bail()
    .isString().withMessage("size must be a string").bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage("size must be XS, S, M, L, XL or XXL"),

    (req,res,next)=>{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                errors:errors.array()
            })
        }
        next()
    }
]