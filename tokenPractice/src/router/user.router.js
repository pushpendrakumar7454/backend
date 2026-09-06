import express from 'express'
import { createUserControllters, findUserControllters, loginUserControllers } from '../controllers/user.controllers.js'
import { userAuthenticate } from '../middleware/user.middleware.js'


const router = express.Router()


router.post("/register", createUserControllters)
router.get("/me", userAuthenticate, findUserControllters)
router.post("/login", loginUserControllers)



export default router;