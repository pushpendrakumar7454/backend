import {Router} from 'express'
import { authLoginController, authMeController, authRefreshcontroller, authRegisterController ,authLogoutController} from '../controllers/auth.controllers.js'
import { authLoginValidator, authRegisterValidator } from '../validation/auth.validator.js'
import { authenticated } from '../middleware/auth.middleware.js'

const router=Router()


router.post("/register",authRegisterValidator,authRegisterController)
router.post("/login",authLoginValidator,authLoginController)
router.post("/refresh",authRefreshcontroller)
router.get("/me",authenticated,authMeController)
router.post("/logout",authLogoutController)

export default router