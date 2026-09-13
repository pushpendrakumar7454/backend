import { Router } from "express";
import { createAuthControllers,meAuthControllers } from "../controllers/auth.controllers.js";
import authenticate from "../middleware/auth.middleware.js";



const router=Router()

router.post("/register",createAuthControllers)
router.get("/me",authenticate, meAuthControllers)

export default router