import {Router} from 'express'
import authRouter from '../router/auth.router.js'
import { loginValidator, registerValidattor } from '../validator/auth.validator.js'
import { authLoginControllers, authMeControllers, authrefreshControllers, authRegisterController } from '../controllers/auth.controller.js'
import authenticate from '../middleware/auth.middleware.js'


const router=Router()


router.post("/register",registerValidattor,authRegisterController)
router.post("/login",loginValidator,authLoginControllers)
router.post("/refresh",authrefreshControllers)
router.get("/me",authenticate,authMeControllers)

export default router