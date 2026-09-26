import { body, validationResult } from "express-validator";


export const createCartProduct=[
    body("productId")
    .exists().withMessage("product id is required").bail()
    .isString().withMessage("product is must be string").bail()
    .trim()
    .isMongoId().withMessage("product must be a valid mongo Id"),

    body("quantuty")
    .exists().withMessage("quantuty is required").bail()
    .isInt({min:1}).withMessage("quantuty must be a integer greter than 0"),

    body("size")
    .exists().withMessage("size is required").bail()
    .isString().withMessage("size must be string").bail()
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



export const unlistProductValidator=[
    body("id")
    .exists().withMessage("product id is required in req params ").bail()
    .isMongoId().withMessage("product is must be  a valid mongo object id"),

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