/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */
const mongoose = require("mongoose")
// Schema to store Tree Hole Threads
const schema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
	name: String,
    imageSrc: String,
    audioUrl: String,
    imageUrl: String,
    videoUrl: String,
    content:  String,
    imageFileName: String,
    videoFileName: String,
    audioFileName: String,
    replies: [
        
        {   
            userId: mongoose.Schema.Types.ObjectId,
            name: String,
            content: String,
            imageSrc: String,
            replies: Array,
        }

    ]
})

module.exports = mongoose.model("TreeHoleThreads", schema)