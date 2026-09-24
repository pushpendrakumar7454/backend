import { Router } from "express";

import { authenticate } from "../middleware/user.middleware.js";
import { createProductControler } from "../controllers/product.controller.js";
import { createProductValidator } from "../validator/product.validator.js";
import upload from "../config/multer.js";

const router = Router();

router.post(
    "/",

    authenticate,

    (req, res, next) => {
        if (req.user.role !== "seller") {
            return res.status(403).json({
                message: "Unauthorized user, so do not create a product"
            });
        }

        next();
    },

    upload.array("images"),

    (req, res, next) => {
        req.body.price = JSON.parse(req.body.price);
        req.body.sizes = JSON.parse(req.body.sizes);

        next();
    },createProductValidator,

    createProductControler
);

export default router;