// Initializations
const express = require('express');
const cors = require('cors');
const messageRoutes = require("./messageRoutes")
const userRoutes = require("./userRoutes")
const dataRoutes = require("./dataRoutes")
const diaryRoutes = require("./diaryRoutes")
const socket = require('socket.io');

// Mongoose initializations
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ConnectTheDotsDbAdmin:readandwrite@connectthedotscluster.ottrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

// Connect to MongoDb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    
    console.log("Connected to ConnectTheDots MongoDb successfully!");
    
    // Initialize Express server
    const app = express();
    app.enable('trust proxy');

    // Middleware
    app.use(express.json())
    app.use(cors());  
    app.use(express.static('public'));
    
    // IMPORTANT: End Points
    app.use("/messageApi", messageRoutes);
    app.use("/userApi", userRoutes);
    app.use("/dataApi", dataRoutes);
    app.use("/diaryApi", diaryRoutes);

    // PORT binding
    const PORT = process.env.PORT;

    const server = app.listen(PORT || 3001, () => {
      console.log(`ConnectTheDots server is listening at http://localhost:${PORT || 3001}`)
    })


    // ROOT
    app.get('/', (req, res) => {
      res.send('Connected successfully to ConnectTheDots server!');

    })

    const io = socket(server, {
        cors: {
            origin: "https://connecthedots.herokuapp.com",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });
    
    io.on('connection', (socket) => {
        // a random id give to whoever login to our application
        console.log("connect to socket: " + socket.id);

        socket.on('join_room', (data) => {
            // data => room number
            socket.join(data);
            console.log('User: ' + data + ' Joined Rooms');
        });


        socket.on('disconnect', () =>{
            console.log('USER DISCONNECTED');
        });
    })
    
    
});

