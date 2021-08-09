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



router.put('/:id', function(req, res, next) {
 
	const id = req.params.id;
	DiaryEntry.findOneAndUpdate({ _id: id }, {title: req.body.title,
	content: req.body.content,
	pics: req.body.pics,
	audio: req.body.audio,
	video: req.body.video})
  .exec()
  .then(result => {
	res.status(200).json(result);
  })
  .catch(err => {
	console.log(err);
	res.status(500).json({error:err});
  })
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
		res.status(200).json(docs);
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
		res.status(200).json(docs);
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
	}
  });

router.get('/searchWea', function(req, res, next) {
	const weather = req.query.weather;
	const user = req.query.user;
	DiaryEntry.find({'weather':weather, 'userID': user})
	.exec()
	  .then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
	   });
	});
	
});

router.get('/searchEmo', function(req, res, next) {
	const emotion = req.query.emotion;
	const user = req.query.user;
	DiaryEntry.find({'emotion':emotion, 'userID': user})
	.exec()
	  .then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
	   });
	});
});

  router.get('/searchAct', function(req, res, next) {
	const activity = req.query.activity;
	const user = req.query.user;
	DiaryEntry.find({'activity':activity, 'userID': user})
	.exec()
	  .then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
	   });
	});
  });

router.get('/searchWord', function(req, res, next) {
	const keyword = req.query.keyword;
	const user = req.query.user;
	if(keyword===''){
	  DiaryEntry.find({'userID': user})
	  .exec()
	  .then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
} else{
	 
	//   DiaryEntry.find({'content':{'$regex' : keyword, '$options' : 'i'}, 'userID': user}) 
	DiaryEntry.find({$and: [{ $or: [{'content':{'$regex' : keyword, '$options' : 'i'}},{'title':{'$regex' : keyword, '$options' : 'i'}}]}, {'userID': user}]}) 
	  .exec()
	  .then(docs => {
		console.log(docs);
		res.status(200).json(docs);
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

router.get('/:id', async function(req, res, next) {

const id = req.params.id;
await DiaryEntry.findById(id)
	  .exec()
	 .then(doc => {
			  console.log("From database", doc);
			  if (doc) {
				res.status(200).json(doc);
			  } else {
				res
				  .status(404)
				  .json({ message: "No valid entry found for provided ID" });
			  }
			})
	  .catch(err => {
			  console.log(err);
			  res.status(500).json({ error: err });
			});
});

module.exports = router