import { config } from './config.js'
import mongoose from 'mongoose'

const connectDb=async()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("connect Db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb