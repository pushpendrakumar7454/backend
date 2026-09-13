import { Router } from "express";
import { createAuthControllers } from "../controllers/auth.controllers.js";


const router=Router()

router.post("/register",createAuthControllers)

export default router