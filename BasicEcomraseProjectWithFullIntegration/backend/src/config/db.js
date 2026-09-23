import mongoose from 'mongoose'
import { config } from './config.js'

const connectDB=async()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("connect DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB