import { body, validationResult } from "express-validator";

export const authRegisterValidator = [
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be string")
    .trim()
    .isLength({ min: 2 })
    .withMessage("name must be at least 2 character"),

  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("please enter a valid email valid address"),

  body("password")
    .exists()
    .withMessage("password is required")
    .isString()
    .withMessage("password must be string")
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: "invalid request",
        errros: errors.array(),
      });
    }
    next();
  },
];

export const authLoginValidator = [
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("please enter a valid email valid address"),

  body("password")
    .exists()
    .withMessage("password is required")
    .isString()
    .withMessage("password must be string")
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({
        message: "invalid request",
        errros: errors.array(),
      });
    }
    next();
  },
];
