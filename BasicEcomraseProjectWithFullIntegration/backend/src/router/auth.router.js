import {Router} from 'express'
import { registerValidator } from '../validator/auth.validator.js'
import { authRegisterController } from '../controllers/auth.controllers.js'

const router=Router()

router.post("/register",registerValidator,authRegisterController)

export default router