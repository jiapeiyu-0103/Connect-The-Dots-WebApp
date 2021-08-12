const express = require("express")
const User = require("./userModels/userModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

// Add a new user
router.post("/users", async (req, res) => {
	const user = new User({
		userID: req.body.userID,
		username: req.body.username,
		password: req.body.password,
		sex: req.body.sex,
		birthday: req.body.birthday,
		photo: req.body.photo
	})
	await user.save()
	res.send(user)
})

// Get a single user using user_id
router.get("/users/:id", async (req, res) => {
	const user = await User.findOne({ userID: req.params.id })
	res.send(user)
})

// get a single user using username
router.get("/checkUserName/:username", async (req, res) => {
	const user = await User.findOne({ username: req.params.username })
	res.send(user)
})

// update a user
router.patch("/users/:id", async (req, res) => {
	const {userID, username, password, sex, photo, birthday} = req.body
	let update = await User.updateOne(
				{ userID: req.params.id }, 
				{$set: {
					username: username,
					password: password,
					sex:sex,
					birthday: birthday,
					photo: photo
					}
				})
	res.send(update)
})

module.exports = router