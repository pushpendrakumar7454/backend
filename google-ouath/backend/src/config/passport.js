
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "./config.js";
import userModel from "../modules/auth.modules.js";


passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLINT_ID,
      clientSecret: config.CLINT_SECRET,
      callbackURL: config.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userModel.findOne({
          googleId: profile.id,
        });

        if (!user) {
          user = await userModel.findOne({
            email: profile.emails?.[0]?.value,
          });
        }

        if (!user) {
          user = await userModel.create({
            name: profile.displayName,
            email: profile.emails?.[0]?.value,
            googleId: profile.id,
          });
        } else if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
