import { createRegisterController,meAuthConteroller,refreshAuthController} from "../controllers/auth.controllers.js"
import {Router} from 'express'
import { authenticate } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/register",createRegisterController)
router.get("/me",authenticate,meAuthConteroller)
router.post("/refresh",refreshAuthController)
export default router