import {Router} from 'express'
import { authLoginController, authRegisterController } from '../controllers/auth.controllers.js'
import { authLoginValidator, authRegisterValidator } from '../validation/auth.validator.js'

const router=Router()


router.post("/register",authRegisterValidator,authRegisterController)
router.post("/login",authLoginValidator,authLoginController)

export default router