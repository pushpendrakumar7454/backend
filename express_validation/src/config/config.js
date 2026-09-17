import dotenv from 'dotenv'
dotenv.config()


export const config={
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN:process.env.JWT_ACCESS_TOKEN,
    REFRESH_TOKEN:process.env.JWT_REFRESH_TOKEN
}