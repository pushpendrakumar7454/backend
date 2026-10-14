import { Server } from "socket.io";


export const initialezeSocket=(httpServer)=>{
    const io=new Server(httpServer)
    io.on("connection",(socket)=>{
        console.log("a user is connected")

        socket.on("disconnect",()=>{
            console.log("a user disconnected")
        })
        socket.on("elon",()=>{
            console.log("elon event received")
        })
    })
}