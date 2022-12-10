const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    socket.on('chat_message', function(msg){
        console.log("Message: " + msg);
    });
});

httpServer.listen(8100);
console.log("Server listening at http://localhost:8100");