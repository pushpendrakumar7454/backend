import {Server} from 'socket.io'


const initializeServer=(httpServer)=>{
    const io=new Server(httpServer)
    io.on("connection",(socket)=>{
        console.log("a user is connected")

        socket.on("disconnect",()=>{
        console.log("a user is disconnected")
    })

    })

   
}

export default initializeServer