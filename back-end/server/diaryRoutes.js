const express = require("express")
const DiaryEntry = require("./diaryModels/diaryModelExample")
const router = express.Router()
const mongoose = require("mongoose");
/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all diaries


/* GET users listing. */
router.get('/getDiary', async function(req, res, next) {
  //it will automatically return a json
  const user = req.query.user;
  console.log(user);
  await DiaryEntry.find({'userID':user})
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      }); 
    });
});

router.post('/addDiary', function(req, res, next) {
	// const newCard = req.body;
	const newDiary = new DiaryEntry({
	  _id: new mongoose.Types.ObjectId(),
	  userID: req.body.userID,
	title: req.body.title,
	content: req.body.content,
	weather: req.body.weather,
	wea_emoji: req.body.wea_emoji,
	emotion: req.body.emotion,
	emo_emoji: req.body.emo_emoji,
	activity: req.body.activity,
	act_emoji: req.body.act_emoji,
	like: req.body.like,
	date: req.body.date,
	month: req.body.month,
	audio: req.body.audio,
	pics: req.body.pics,
	video: req.body.video,
	});
	newDiary
	  .save()
	  .then(result => {
		console.log(result);
		res.status(201).json({
		  message: "Handling POST requests to /addCard",
		  newCard: result
		});
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
  });

  router.delete('/:id', function(req, res, next) {
	const id = req.params.id;
	DiaryEntry.remove({ _id: id })
	  .exec()
	  .then(result => {
		res.status(200).json(result);
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
   
  });

  router.put('/addFav/:id', function(req, res, next) {
 
	const id = req.params.id;
	const newLike = !req.body.like;
  DiaryEntry.findOneAndUpdate({ _id: id }, 
	{like: newLike
	})
  .exec()
  .then(result => {
	res.status(200).json(result);
  })
  .catch(err => {
	console.log(err);
	res.status(500).json({error:err});
  })
  });

  router.get('/searchDate', function(req, res, next) {
	const date = req.query.date;
	const user = req.query.user;
	if(date===''){
	  DiaryEntry.find({'userID': user})
	  .exec()
	  .then(docs => {
		console.log(docs);
		//   if (docs.length >= 0) {
		res.status(200).json(docs);
		//   } else {
		//       res.status(404).json({
		//           message: 'No entries found'
		//       });
		//   }
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
	} else{
	 
	  DiaryEntry.find({'date':date, 'userID': user})
	  .exec()
	  .then(docs => {
		console.log(docs);
		//   if (docs.length >= 0) {
		res.status(200).json(docs);
		//   } else {
		//       res.status(404).json({
		//           message: 'No entries found'
		//       });
		//   }
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
	}
  });
  
// router.get("/diaries", async (req, res) => {
// 	const diaries = await DiaryEntry.find()
// 	res.send(diaries)
// })

// router.post("/diaries", async (req, res) => {
// 	const diary = new DiaryEntry({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
// 	await diary.save()
// 	res.send(diary)
// })

// router.get("/diaries/:id", async (req, res) => {
// 	const diary = await DiaryEntry.findOne({ _id: req.params.id })
// 	res.send(diary)
// })

module.exports = router