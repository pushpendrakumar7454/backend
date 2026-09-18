import express from 'express'
import cookieParser from 'cookie-parser'
import userRouter from '../router/user.router.js'

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",userRouter)

export default app;