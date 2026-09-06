import express from 'express'
import { createUserControllters } from '../controllers/user.controllers.js'

const router = express.Router()


router.post("/register", createUserControllters)


export default router;