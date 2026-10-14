import { Server } from "socket.io";


export const initialezeSocket=(httpServer)=>{
    const io=new Server(httpServer)
}