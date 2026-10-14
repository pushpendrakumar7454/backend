import app from "./app/app.js";
import { config } from "./config/config.js";
import connectDb from "./config/db.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { initialezeSocket } from "./sockets/socket.server.js";

await connectDb();

const port = config.PORT;

const httpServer = createServer(app);

initialezeSocket()

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});