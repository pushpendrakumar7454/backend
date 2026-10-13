import app from "./app/app.js";
import { config } from "./config/config.js";
import connectDb from "./config/db.js";
import {createServer} from 'node:http'


await connectDb()
const port=config.PORT



const httpServer=createServer(app)

httpServer.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})