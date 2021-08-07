const path = require('path');
const express = require('express');
const http = require('http');
const socket = require('socket.io');


let clients = [];

const app = express();
const server = http.createServer(app);
const io = socket(server);

const user = "Harry";

let activeUser = {
    username: user,
    connection: false
}

var x = path.join('back-end', 'chat_server', 'chatModels');

console.log('path is now ', x);

// change the default path !!!!!
// app.use(express.static('../../front-end/src/components/Message/Chat/index.html'));
app.use(express.static(path.join(__dirname, 'chatModels')));

io.on('connection', (socket) => {
    console.log('>> new client connection ', socket.id)

    clients.push({
        id: socket.id,
        accessible: true
    })

    console.log('>> clients are ', clients)

    let randomClent = {};

    for (let c of clients) {
        // get a random client and set accessibility to false
        if (c.accessible && c.id !== socket.id) {
            randomClent = c
            c.accessible = false
            
            // set the current user accessibility to false
            for (let cc of clients) {

                if (cc.id === socket.id) {
                    cc.accessible = false
                }
            }

            break
        }
    }

    console.log('>> recheck: clients are ', clients)


    // connect with other users
    socket.on('pair', () => {
        // welcome message
        socket.emit('notice', {
            message: "Welcome to the chat room !",
            sender: user
        })

        // broadcast when a user connects
        socket.broadcast.emit('notice', {
            message: "has joined the chat room !",
            sender: user
        })
    })


    // send a message 
    socket.on('send-message', (message) => {
        io.sockets.emit('send-message', {
            message: message,
            sender: user
        })
    })

    // notify when other users are typing
    socket.on('typing', () => {
        socket.broadcast.emit('typing', {
            sender: user
        })
    })

    // notify when a user leaves
    socket.on('disconnect', () => {
        io.emit('notice', {
            message: "has left the chat room !",
            sender: user
        })
    })
})

const PORT = 10000 || process.env.PORT;

server.listen(PORT, () => console.log(`>> server is listening to port: ${PORT}`));