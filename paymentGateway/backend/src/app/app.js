import express from 'express'
import morgen from 'morgan'

const app=express()

app.use((morgen('dev')))
app.use(express.json())

export default app