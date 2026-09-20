import {Router} from 'express'
import {loginvalidator, registerValidator } from '../validator/auth.validator.js';
import { authRegisterController, loginController } from '../controllers/auth.controllers.js';


const router=Router()

router.post("/register",registerValidator,authRegisterController)
router.post("/login",loginvalidator,loginController)


export default router;