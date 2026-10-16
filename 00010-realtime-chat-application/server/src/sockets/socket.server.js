import {Server} from 'socket.io'



const initiallizeServer=(httpServer)=>{

    const io=new Server(httpServer)
    io.on("connection",(socket)=>{
        console.log("a user is connected")


        socket.on("disconnect",()=>{
            console.log("a user is disconnected")
        })
    })

}

export default initiallizeServer