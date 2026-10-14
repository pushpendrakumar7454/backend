import app from './app/app.js'
import {createServer} from 'node:http'
import {Server} from 'socket.io'


const httpServer=createServer(app)
const io=new Server(httpServer)

io.on("connection",(socket)=>{
    console.log("A user is connected")

})

httpServer.listen(3000,()=>{
    console.log("server is running  on porrt 3000")
})