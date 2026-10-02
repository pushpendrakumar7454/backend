import express from 'express'
import cookieParser from 'cookie-parser'
import authRouter from '../router/authRouter.js'
import productRouter from '../router/product.route.js'

const app=express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use('/api/products',productRouter)

export default app
