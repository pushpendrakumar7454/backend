import {Server} from 'socket.io'


const initializeServer=(httpServer)=>{
    const io=new Server(httpServer)

}

export default initializeServer