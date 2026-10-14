import app from './app/app.js'
import {createServer} from 'node:http'
import {Server} from 'socket.io'


const httpServer=createServer(app)
const io=new Server(httpServer)

io.on('connection',(socket)=>{
    console.log("a user connected")
    
    socket.on("disconnect",()=>{
        console.log("a user disconnected")
    })
})

httpServer.listen(3000,()=>{
    console.log("server is runnning on port 3000")
})