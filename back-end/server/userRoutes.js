const express = require("express")
const User = require("./userModels/userModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

router.post("/users", async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	})
	await user.save()
	res.send(user)
})

router.get("/users/:id", async (req, res) => {
	const user = await User.findOne({ _id: req.params.id })
	res.send(user)
})

module.exports = router