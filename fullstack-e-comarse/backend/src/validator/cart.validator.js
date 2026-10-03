import {body,validationResult} from 'express-validator'

export const addToCartValidator=[

    body("productId")
    .exists().withMessage("product is is required").bail()
    .isString().withMessage("product id must be string").bail()
    .trim()
    .isMongoId().withMessage("product must be a valid mongo Id"),
      
    body("quantity")
    .exists().withMessage("quantity is required").bail()
    .isInt({min:1}).withMessage("quantity must be a integer greter than 1"),

    body("size")
    .exists().withMessage("size is required").bail()
    .isString().withMessage("size must be string").bail()
    .trim()
    .isIn(["XS", "S", "L", "XL", "M", "XL", "XXL"]).withMessage("size must be a XS,S,L,XL,M,XL,XXL"),

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