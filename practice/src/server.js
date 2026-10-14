import app from "./app/app.js";
import {createServer} from 'node:http'

const httpServer=createServer(app)

httpServer.listen(3000,()=>{
    console.log("server is running on port 3000")
})