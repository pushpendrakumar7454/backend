import express from 'express'
import authRouter from '../router/auth.router.js'
import cookeParser from 'cookie-parser'


const app=express()
app.use(express.json())
app.use(cookeParser())

app.use("/api/auth",authRouter)

export default app