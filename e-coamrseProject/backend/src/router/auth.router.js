import {Router} from 'express'
import authRouter from '../router/auth.router.js'
import { registerValidattor } from '../validator/auth.validator.js'
import { authRegisterController } from '../controllers/auth.controller.js'
const router=Router()


router.post("/register",registerValidattor,authRegisterController)

export default router