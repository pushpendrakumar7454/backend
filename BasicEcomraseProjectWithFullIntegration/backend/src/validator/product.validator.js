import {body,validationResult} from 'express-validator'


export const createProductValidator=[
    body("title")
    .exists().withMessage("title is required").bail()
    .isString().withMessage("title must be string").bail()
    .trim()
    .isLength({min:2,max:50}).withMessage("title must be at least 2 character and maximum 50 character"),


    body("description")
]