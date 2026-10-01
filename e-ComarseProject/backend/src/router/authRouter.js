import {Router} from 'express'
import { loginValidator, registerValidator } from '../validator/auth.validator.js'
import { authLoginController, authRefreshController, authRegisterController } from '../controllers/authControllers.js'

const router=Router()

router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginValidator,authLoginController)
router.post("/refresh",authRefreshController)

export default router