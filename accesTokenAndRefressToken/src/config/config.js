import dotenev from 'dotenv'
dotenev.config()


const config = {
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    REFRESS_TOKEN: process.env.REFRESS_TOKEN
}

export default config