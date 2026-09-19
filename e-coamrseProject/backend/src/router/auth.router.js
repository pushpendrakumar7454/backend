import {Router} from 'express'
import authRouter from '../router/auth.router.js'
import { loginValidator, registerValidattor } from '../validator/auth.validator.js'
import { authLoginControllers, authRegisterController } from '../controllers/auth.controller.js'
const router=Router()


router.post("/register",registerValidattor,authRegisterController)
router.post("/login",loginValidator,authLoginControllers)

export default router