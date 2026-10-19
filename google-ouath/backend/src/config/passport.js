import passport from 'passport'
import {Strategy as GoogleStategy} from 'passport-google-oauth20'
import { config } from './config.js'



passport.use({
    clientID:config.CLINT_ID,
    clientSeecret:config.CLINT_SECRET,
    callBackURL:config.CALLBACK_URL
})

async(accessToken,refreshToken,profile,done)=>{
    try {
    return done(null,user)
    } catch (error) {
        return done(error)
    }
}