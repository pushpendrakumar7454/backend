import express from 'express'
import { meUserController, registerUserController } from '../controllers/user.controllers.js'
import { authenticate } from '../middleware/user.middleware.js'


const router = express.Router()

router.post("/register", registerUserController)
router.get("/me", authenticate, meUserController)

export default router