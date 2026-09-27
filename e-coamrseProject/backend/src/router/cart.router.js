import {Router} from 'express'
import authenticate from '../middleware/auth.middleware.js'
import { createCartController } from '../controllers/cart.controller.js'
const router=Router()


router.get("/",authenticate,createCartController)


export default router