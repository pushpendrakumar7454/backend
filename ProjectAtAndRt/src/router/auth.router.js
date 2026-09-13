import { createRegisterController } from "../controllers/auth.controllers.js"
import {Router} from 'express'

const router = Router()

router.post("/register",createRegisterController)

export default router