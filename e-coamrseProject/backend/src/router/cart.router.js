import {Router} from 'express'
import authenticate from '../middleware/auth.middleware.js'
import { addToCartController, getCartController } from '../controllers/cart.controller.js'
import { addToCartProductValidator } from '../validator/cart.validator.js'
const router=Router()


router.post("/",authenticate,addToCartProductValidator,addToCartController)
router.get("/get",authenticate,getCartController)


export default router