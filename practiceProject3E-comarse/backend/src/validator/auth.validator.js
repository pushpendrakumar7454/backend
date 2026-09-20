import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("email")
    .exists()
    .withMessage("email is required").bail()
    .trim()
    .isEmail()
    .withMessage("please enter valid formate of email"),

  body("name")
    .exists()
    .withMessage("name is required").bail()
    .isString()
    .withMessage("please enter the password in string").bail()
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "password at least minimum 3 character and 50 maximum character",
    ).bail()
    .trim(),

  body("password")
    .exists()
    .withMessage("password is required").bail()
    .isString()
    .withMessage("please enter password in string").bail()
    .trim()
    .isLength({ min: 6 })
    .withMessage("password is required at least 6 character"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        meessage: "invalid requiret",
        errors: errors.array(),
      });
    }
    next();
  },
];


export const loginControllers=[
  body("email")
  .exists().withMessage("email is required").bail()
  .isEmail().withMessage("please enter email valid formate")
  .isString().withMessage("email must be string")
  .trim(),

  body("password")
  .exists().withMessage("email is required")
  .isString().withMessage("password must be string")
  .trim()
  .isLength({min:6}).withMessage("password must be 6 character required"),

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


