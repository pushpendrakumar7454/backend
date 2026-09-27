import {Router} from 'express'
import authenticate from '../middleware/user.middleware'
import { addToCartController, getAllCartProductController } from '../controllers/cart.controller'
import {addToCartValidator}from '../validator/cart.validator'
const router=Router()

router.post("/",authenticate,addToCartValidator,addToCartController)
router.get("/getAll",getAllCartProductController)

export default router