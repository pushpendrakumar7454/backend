import {Router} from 'express'
import {loginvalidator, registerValidator } from '../validator/auth.validator.js';
import { authRegisterController, loginController,authRefreshController,authMeController } from '../controllers/auth.controllers.js';
import { authenticate } from '../middleware/user.middleware.js';


const router=Router()

router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginvalidator,loginController)
router.post("/refresh",authRefreshController)
router.get("/me",authenticate,authMeController)


export default router;