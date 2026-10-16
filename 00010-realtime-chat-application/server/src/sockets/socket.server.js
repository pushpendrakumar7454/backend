import {Server} from 'socket.io'



const initiallizeServer=(httpServer)=>{

    const io=new Server(httpServer)

}

export default initiallizeServer