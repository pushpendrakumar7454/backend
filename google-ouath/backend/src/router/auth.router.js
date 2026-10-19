import { Router } from "express";
import {
  authRegisterValidator,
  authLoginValidator,
} from "../validation/auth.validator.js";
import {
  authLoginControllers,
  authMeControllers,
  authrefreshControllers,
  authRegisterController,
} from "../controllers/auth.controllers.js";
import authenticate from "../middleware/auth.middleware.js";
import passport from "../config/passport.js";

const router = Router();

router.post("/register", authRegisterValidator, authRegisterController);
router.post("/login", authLoginValidator, authLoginControllers);
router.post("/refresh", authrefreshControllers);
router.get("/me", authenticate, authMeControllers);

//google OAuth

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    prompt: "select_account",
  }),
);



export default router;
