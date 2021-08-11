const path = require('path');
const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, '../../front-end/src/components/Message/Chat/chatModels')));

io.on('connection', (socket) => {
    // welcome message
    socket.emit('enter-room')

    // connect with other users
    socket.on('pair', () => {

        // send a request to connect a random user
        socket.broadcast.emit('request', {
            message: ">> a user requests to connect to a random user",
            sender: socket.id 
        })

    })

    // provide an offer for random connection
    socket.on('offer', (offer) => {  
        socket.to(offer.receiver).emit('offer', offer)
    })

    // confirm the offer and set up the connection 
    socket.on('confirm', (message) => {
        socket.to(message.receiver).emit('confirm', message)
    })

    // provide a feedback after confirm
    socket.on('feedback', (message) => {
        socket.to(message.receiver).emit('feedback', message)
    })


    // send a message 
    socket.on('send-message', (message) => {
        socket.to(message.receiver).emit('send-message',message)
    })

    // notify when other users are typing
    socket.on('typing', (notification) => {
        socket.to(notification.receiver).emit('typing', notification)
    })

    socket.on('leave', (message) => {
        socket.to(message.receiver).emit('leave', message)
    })
})

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => console.log(`>> server is listening to port: ${PORT}`));
