import {Router} from 'express'
import { userRegisterController } from '../controllers/user.Controllers.js'
import { registerValider } from '../validator/user.validator.js'

const router=Router()

router.post("/register",registerValider,userRegisterController)

export default router

