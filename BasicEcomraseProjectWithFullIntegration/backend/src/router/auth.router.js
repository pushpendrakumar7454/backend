import {Router} from 'express'
import { loginValidator, registerValidator } from '../validator/auth.validator.js'
import { authLoginController, authMeController, authRefreshController, authLogoutController, authRegisterController } from '../controllers/auth.controllers.js'
import { authenticate } from '../middleware/auth.middleware.js'

const router=Router()

router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginValidator,authLoginController)
router.post("/refresh",authRefreshController)
router.get("/me",authenticate,authMeController)
router.post("/logout",authLogoutController)

export default router