import dotenv from 'dotenv'
dotenv.config()


export const config={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    RAZERPAY_KEY_ID:process.env.RAZERPAY_TEST_KEY,
    RAZERPAY_SECRET_KEY:process.env.RAZERPAy_SECRET_KEY
}