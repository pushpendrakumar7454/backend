import express from 'express'
import urlRouter from '../router/url.router.js'
const app=express()
app.use(express.json())

app.use("/api",urlRouter)


export default app;