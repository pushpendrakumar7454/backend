import app from './app/app.js'
import {createServer} from 'node:http'
import initializeServer from './sockets/sockets.server.js'



const httpServer=createServer(app)

initializeServer(httpServer)

httpServer.listen(3000,()=>{
    console.log("server is running on port 300")
})