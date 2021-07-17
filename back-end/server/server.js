// Initializations
const express = require('express');
const cors = require('cors');
const messageRoutes = require("./messageRoutes")
const userRoutes = require("./userRoutes")
const dataRoutes = require("./dataRoutes")
const diaryRoutes = require("./diaryRoutes")

// Mongoose initializations
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ConnectTheDotsDbAdmin:readandwrite@connectthedotscluster.ottrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

// Connect to MongoDb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    
    console.log("Connected to ConnectTheDots MongoDb successfully!");
    
    // Initialize Express server
    const app = express();

    // Middleware
    app.use(express.json())
    app.use(cors());  
    
    // IMPORTANT: End Points
    app.use("/messageApi", messageRoutes);
    app.use("/userApi", userRoutes);
    app.use("/dataApi", dataRoutes);
    app.use("/diaryApi", diaryRoutes);

    // PORT binding
    const PORT = process.env.PORT;

    app.listen(PORT || 3001, () => {
      console.log(`ConnectTheDots server is listening at http://localhost:${PORT || 3001}`)
    })


    // ROOT
    app.get('/', (req, res) => {
      res.send('Connected successfully to ConnectTheDots server!');

    })
 
    
    
});

