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
import { config } from "../config/config.js";

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


router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    try {
      const accessToken = jwt.sign(
        { userId: req.user._id },
        config.ACCESS_TOKEN,
        { expiresIn: "15m" }
      );

      const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      };

      // Redirect to frontend
      const params = new URLSearchParams({
        accessToken,
        user: JSON.stringify(user),
      });

      res.redirect(
        `http://localhost:5173/google/callback?${params.toString()}`
      );
    } catch (error) {
      console.error(error);
      res.redirect("http://localhost:5173/login");
    }
  }
);


export default router;
