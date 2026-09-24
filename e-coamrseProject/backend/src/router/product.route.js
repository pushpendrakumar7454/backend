import { Router } from "express";
import authenticate from "../middleware/auth.middleware.js";
import { createProductCoontroller } from "../controllers/product.controllers.js";
import multer from 'multer'
import { createProductValidtar } from "../validator/product.validator.js";

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        files:5,
        fileSize:1*2024*2024
    }
})

const router = Router();

router.post(
    "/",
    authenticate,
    (req, res, next) => {

        if (req.user.role !== "seller") {
            return res.status(403).json({
                message: "User not authorized to create product"
            });
        }

        next();
    }, upload.array("images"),
    (req,res,next)=>{
        req.body.price=JSON.parse(req.body.price)
        req.body.sizes=JSON.parse(req.body.sizes)
        next()
    },createProductValidtar,
    createProductCoontroller
);

export default router;