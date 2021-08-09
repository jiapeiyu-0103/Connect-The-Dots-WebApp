const path = require('path');
const express = require('express');
const http = require('http');
const socket = require('socket.io');


// let clients = [];

const app = express();
const server = http.createServer(app);
const io = socket(server);

const user = "Harry";

// var x = path.join('back-end', 'chat_server', 'chatModels');

// console.log('path is now ', x);

// change the default path !!!!!
// app.use(express.static('../../front-end/src/components/Message/Chat/index.html'));
app.use(express.static(path.join(__dirname, '../../front-end/src/components/Message/Chat/chatModels')));

io.on('connection', (socket) => {
    console.log('>> new client connection ', socket.id)

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
        console.log(offer.message)
        socket.to(offer.receiver).emit('offer', offer)    
    })

    // confirm the offer and set up the connection 
    socket.on('confirm', (message) => {
        console.log(message.message)
        socket.to(message.receiver).emit('confirm', message)
    })

    // provide a feedback after confirm
    socket.on('feedback', (message) => {
        console.log(message.message)
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

    // notify when a user leaves
    // socket.on('disconnect', () => {
    //     io.emit('leave', {
    //         message: "has left the chat room !",
    //         sender: user
    //     })
    // })

    socket.on('leave', (message) => {
        socket.to(message.receiver).emit('leave', message)
    })
})

const PORT = 10000 || process.env.PORT;

server.listen(PORT, () => console.log(`>> server is listening to port: ${PORT}`));
