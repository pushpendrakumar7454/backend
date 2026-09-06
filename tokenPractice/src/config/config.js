import dotenv from 'dotenv'
dotenv.config()

export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_ACCESS_TOKEN: process.env.JWT_ACCESSTOKEN
}