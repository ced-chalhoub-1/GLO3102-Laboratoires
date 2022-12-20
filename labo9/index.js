const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    console.log("A client connected");
    socket.on("disconnect", (err) => {
        console.log("user disconnected");
    });

    socket.on('sendingMessage', (payload) => {
        io.emit('broadCastMessageFromServer', payload);
    })
});

app.get('/', (req, res) => {res.sendFile(__dirname + '/views/index.html')});

server.listen(8100, () => {
    console.log("Server listening at http://localhost:8100");
})
