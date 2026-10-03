import {Router} from 'express'
import { authenticate } from '../middleware/auth.middleware'
import { addToCartController } from '../controllers/cart.controller'

const router = Router()

router.post("/",authenticate,addToCartController)

export default router