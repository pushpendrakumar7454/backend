import express from 'express'
import userRouter from '../router/user.router.js'

const app=express()

app.use(express.json())


export default app;