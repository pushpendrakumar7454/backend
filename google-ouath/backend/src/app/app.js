import express from 'express'
import authRouter from '../router/auth.router.js'
import cookieParser from "cookie-parser";
import passport from '../config/passport.js'

const app=express()

app.use(express.json())
app.use(cookieParser());
app.use(passport.initialize())

app.use("/api/auth",authRouter)

export default app