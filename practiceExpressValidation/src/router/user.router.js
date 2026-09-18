import  {Router} from 'express'
import { registerUserValidator } from '../validator/user.validate.js'
import { userRegisterController } from '../controllers/user.controllers.js'

const router=Router()

router.post("/register",registerUserValidator,userRegisterController)

export default router

