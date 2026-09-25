import {Router} from 'express'
import {authenticate} from '../middleware/auth.middleware.js'
import { createProductController,fildAllProductController } from '../controllers/product.controller.js';
import upload from '../config/multer.js';
import { createProductValidator } from '../validator/product.validator.js';
const router=Router()
 
router.post("/", upload.array("images"),(req, res, next) => {
        req.body.price = JSON.parse(req.body.price);
        req.body.sizes = JSON.parse(req.body.sizes);
        next();
    }, createProductValidator,createProductController);

router.get("/find",fildAllProductController)    

export default router;