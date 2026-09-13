import dotenv from 'dotenv'
dotenv.config()

export const config={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN:process.env.ACCESS_TOKEN,
    REFRESH_TOKEN:process.env.REFRESH_TOKEN
}