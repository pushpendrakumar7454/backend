import {Router} from 'express'
import { loginValidator, registerValidator } from '../validator/auth.validator.js'
import { authLoginController, authRegisterController } from '../controllers/auth.controllers.js'

const router=Router()

router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginValidator,authLoginController)

export default router