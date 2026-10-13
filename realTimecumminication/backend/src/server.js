import app from "./app/app.js";
import { config } from "./config/config.js";
import connectDb from "./config/db.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

await connectDb();

const port = config.PORT;

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});