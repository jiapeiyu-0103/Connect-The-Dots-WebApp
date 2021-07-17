/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

const mongoose = require("mongoose")
const schema = mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    collectorUserId: mongoose.Schema.Types.ObjectId,
	name: String,
    location: String,
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
            userId: String,
            name: String,
            location: String,
            content: String,
            imageSrc: String,
        }

    ]
})

module.exports = mongoose.model("SendDriftBottles", schema)