import { Router } from "express";

import { authenticate, authenticateSeller } from "../middleware/user.middleware.js";
import { createProductController,findALlProductController, listALlSellerProductController, listProductsController, unlistProductController } from "../controllers/product.controller.js";
import { createProductValidator, listProductValidator, unlistProductValidator } from "../validator/product.validator.js";
import upload from "../config/multer.js";

const router = Router();

router.post("/",authenticate,authenticateSeller,upload.array("images"),
    (req, res, next) => {
        req.body.price = JSON.parse(req.body.price);
        req.body.sizes = JSON.parse(req.body.sizes);

        next();
    },createProductValidator,createProductController
);

router.get("/",authenticate,findALlProductController)
router.get("/seller",authenticate,authenticateSeller,listALlSellerProductController)
router.patch("/unlist/:id",authenticate,authenticateSeller,unlistProductValidator,unlistProductController)
router.patch("/list/:id",authenticate,authenticateSeller,listProductValidator,listProductsController)


export default router;