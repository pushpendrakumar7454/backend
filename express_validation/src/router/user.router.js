import {Router} from 'express'
import { userRegisterController } from '../controllers/user.Controllers.js'

const router=Router()

router.post("/register",userRegisterController)

export default router

