import express from 'express'
import morgen from 'morgan'
import productRouter from '../router/product.router.js'

const app=express()

app.use((morgen('dev')))
app.use(express.json())
app.use("/api/product",productRouter)

export default app