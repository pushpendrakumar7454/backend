import express from 'express'
import { meUserController, registerUserController,refreshUserController  } from '../controllers/user.controllers.js'
import { authenticate } from '../middleware/user.middleware.js'


const router = express.Router()

router.post("/register", registerUserController)
router.get("/me", authenticate, meUserController)
router.post("/refresh",refreshUserController)

export default router