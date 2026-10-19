import app from './app/app.js'
import { config } from "./config/config.js";
import connectDb from "./config/db.js";
import passport from '../src/config/passport.js'
import "dotenv/config"


await connectDb()
const port=config.PORT
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})