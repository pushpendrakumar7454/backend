
import { Server } from "socket.io";
import { verifyToken } from "../utils/jwt.js";

const initiallizeServer = (httpServer) => {
  const io = new Server(httpServer);

  io.use((socket,next)=>{
    const token=socket.handshake.headers?.authorization?.split(" ")[1]

    if(!token){
        return next(new Error("authenticated error"))
    }
    try {
        const decoded=verifyToken(token,'access')
        next()
    } catch (error) {
        return next(new Error("authencticated error"))
    }
  })

  // Connection event
  io.on("connection", (socket) => {
    console.log("A user is connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("A user is disconnected:", socket.id);
    });
  });

  return io;
};

export default initiallizeServer;
