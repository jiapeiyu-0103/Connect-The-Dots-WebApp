const express = require("express")
const DiaryEntry = require("./diaryModels/diaryModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all diaries
router.get("/diaries", async (req, res) => {
	const diaries = await DiaryEntry.find()
	res.send(diaries)
})

router.post("/diaries", async (req, res) => {
	const diary = new DiaryEntry({
		title: req.body.title,
		content: req.body.content,
	})
	await diary.save()
	res.send(diary)
})

router.get("/diaries/:id", async (req, res) => {
	const diary = await DiaryEntry.findOne({ _id: req.params.id })
	res.send(diary)
})

module.exports = router