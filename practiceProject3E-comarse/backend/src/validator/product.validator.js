import {body} from 'express-validator'


export const createProductValidator=[
    body("title")
    .exists().withMessage("title must be required").bail()
    .trim()
    .isString().withMessage("title must be String").bail()
    .isLength({min:2,max:100}).withMessage("title must be eat least minimum 2 character and maximum 100 character")
    .isAlpha("en-US",{ignore:" "}).withMessage("title is must me small letters and capital letters"),

    body("desctiption")
]