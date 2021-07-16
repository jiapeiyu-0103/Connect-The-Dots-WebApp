const express = require("express")
const SendDriftBottles = require("./messageModels/SendDriftBottles")
const router = express.Router()
const fs = require('fs');
const multiparty = require('multiparty');

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all send drift bottles
router.get("/getSendDriftBottles/:userId", async (req, res) => {
	const sendDriftBottles = await SendDriftBottles.find({userId: req.params.userId})
	res.send(sendDriftBottles)
})

router.post ("/addDriftBottlesImage", (req, res) => {
    const fullServerUrl = req.protocol + '://' + req.get('host');
    const form = new multiparty.Form();
    form.parse(req, async (err,fields, files) => {
        const imageFileName = fields.imageFileName[0];
        const userId = fields.userId[0];
        const bottleId = fields.bottleId[0];
        let hashImageName = null;
        const date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();

        // current seconds
        let seconds = date_ob.getSeconds();
        
        hashImageName = userId + "-" + year + month + date + hours +  minutes +  seconds + Math.floor(Math.random() * 100) + 1 + imageFileName;
        //The file itself
        const uploadImageFile = files.imageFile[0];
        const path_temp = uploadImageFile.path;
        //Move uploaded file with unique name to server public/files folder
        await fs.rename(path_temp,`${__dirname}/public/driftBottleImages/${hashImageName}`, (err) => {
            if (err) console.error(err);
        });
        
        const query = {_id: bottleId},
        update = {imageFileName: hashImageName, imageUrl: fullServerUrl+"/messageApi/getDriftBottleImages/"+hashImageName},
        options = { upsert: true, new: true, setDefaultsOnInsert: true };
        await SendDriftBottles.findOneAndUpdate(query, update, options, (error, result) => {
            if (error) console.log("Failed to update image file name. Error: " + error.stack);
            else console.log("Update image file name and url successfully");
        });
        
        res.json("AddDriftBottlesImage SUCCESS")
        
    
    });

})

// Add individual send drift bottles.
router.post("/addSendDriftBottles", async (req, res) => {
	const sendDriftBottles = new SendDriftBottles({
		name: req.body.name,
		location: req.body.location,
        imageSrc: req.body.imageSrc,
        audioUrl: req.body.audioUrl,
        imageUrl: req.body.imageUrl,
        videoUrl: req.body.videoUrl,
        content:  req.body.content,
        replies:  req.body.replies,
        userId: req.body.userId,
        collectorUserId: null,
	})
	await sendDriftBottles.save();
	res.json({message:"ADD SEND BOTTLE success", bottleId: sendDriftBottles._id});
})

//SEND image file endpoint
router.get('/getDriftBottleImages/:imageName', function (req, res, next) {

    const options = {
        root: __dirname + '/public/driftBottleImages/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    const fileName = req.params.imageName;


    //Send request file name
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent: ', fileName);
        }
    })

});

router.delete("/deleteSendDriftBottles/:id", async (req, res) => {
	try {
        
        const bottleToDelete = await SendDriftBottles.find({_id:req.params.id}, 'imageFileName');
        if (bottleToDelete && bottleToDelete[0].imageFileName) {
           let filePath = `${__dirname}/public/driftBottleImages/${bottleToDelete[0].imageFileName}`;
        await fs.unlink(filePath, (error) => {
            if(error) console.error(error);
        }) 
        }
        
		await SendDriftBottles.deleteOne({ _id: req.params.id })
        fs
		res.json("DELETE SEND BOTTLE success");
	} catch {
		res.status(404)
		res.json("SEND DRIFT BOTTLE doesn't exist!" );
	}
})

module.exports = router