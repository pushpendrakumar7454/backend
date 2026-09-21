import express from 'express'
import authRouter from '../router/auth.router.js'
import cookeParser from 'cookie-parser'
import productRouter from '../router/product.route.js'


const app=express()
app.use(express.json())
app.use(cookeParser())

app.use("/api/auth",authRouter)
app.use("/api/products",productRouter)

export default app