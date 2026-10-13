import express from 'express'
import morgen from 'morgan'
import productRouter from '../router/product.router.js'
import path from 'path'

const app=express()

app.use((morgen('dev')))
app.use(express.json())
app.use("/api/product",productRouter)


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

export default app