import {body,validationResult} from 'express-validator'

export const createProductValidator=[
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("title must be Strring").bail()
    .trim()
    .isLength({min:2,max:100}).withMessage("title must be required minimum 2 character and maximum 100 character").bail()
    .isAlpha("en-US",{ignore:" "}).withMessage("title can only have small letters and capital letters"),

    body("desctiption")
    .exists().withMessage("desctiption is required").bail()
    .isLength({min:10,max:500}).withMessage("desctiption must be minimum 10 character and maximum 500 character").bail()
    .trim()
    .isString().withMessage("desctiption must be String"),

    body("price.amount")
    .exists().withMessage("price is required").bail()
    .isFloat({min:0}).withMessage("amount must be float"),

    body("price.currency")
    .exists().withMessage("current is required").bail()
    .isString().withMessage("currency must be string").bail()
    .isIn(["INR","USD"]).withMessage("currency either be uSD AND INR")



]