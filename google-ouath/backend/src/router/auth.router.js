import {Router} from 'express'
import {authRegisterValidator,authLoginValidator} from '../validation/auth.validator.js'
import { authLoginControllers, authMeControllers, authrefreshControllers, authRegisterController } from '../controllers/auth.controllers.js'
import authenticate from '../middleware/auth.middleware.js'


const router=Router()


router.post("/register",authRegisterValidator,authRegisterController)
router.post("/login",authLoginValidator,authLoginControllers)
router.post("/refresh",authrefreshControllers)
router.get("/me",authenticate,authMeControllers)


//google OAuth




export default router