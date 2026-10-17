import { config } from './config.js'
import mongoose from 'mongoose'

const connectDb=async()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

export default connectDb