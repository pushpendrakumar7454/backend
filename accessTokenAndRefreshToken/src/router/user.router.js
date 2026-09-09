import express from 'express'
import { registerUserController } from '../controllers/user.controllers.js'


const router = express.Router()

router.post("/register", registerUserController)

export default router