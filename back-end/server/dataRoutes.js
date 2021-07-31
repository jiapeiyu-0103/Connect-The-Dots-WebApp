const express = require("express")
const DataModel = require("./diaryModels/diaryModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all dairy entries
router.get("/data", async (req, res) => {
	const data = await DataModel.find()
	res.send(data)
})

// get all entries for specific month
router.get("/getOneMonthDairies", async (req, res) => {
	const id = req.query.user;
	const mon = parseInt(req.query.month);
	console.log("dd " + mon);
	if (mon !== null && mon !== undefined) {
		await DataModel.find({
			userID: id,
			month: mon
		}).then(doc => {
			console.log(doc);
			res.send(doc);
		}).catch(err => {
			console.log(err);
			return res.status(400).send({
				message: err,
			});
		})
	}
});

router.post("/data", async (req, res) => {
	const data = new DataModel({
		title: req.body.title,
		content: req.body.content,
	})
	await data.save()
	res.send(data)
})

router.get("/data/:id", async (req, res) => {
	const data = await DataModel.findOne({ _id: req.params.id })
	res.send(data)
})

module.exports = router
