const express = require("express")
const DataEntry = require("./dataModels/dataModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all data entries
router.get("/data", async (req, res) => {
	const data = await DataEntry.find()
	res.send(data)
})

router.post("/data", async (req, res) => {
	const data = new DataEntry({
		title: req.body.title,
		content: req.body.content,
	})
	await data.save()
	res.send(data)
})

router.get("/data/:id", async (req, res) => {
	const data = await DataEntry.findOne({ _id: req.params.id })
	res.send(data)
})

module.exports = router