
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "./config.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLINT_ID,
      clientSecret: config.CLINT_SECRET,
      callbackURL: config.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = profile;

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
