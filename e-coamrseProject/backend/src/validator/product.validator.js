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
    .isIn(["INR","USD"]).withMessage("currency either be inr or USD")


]