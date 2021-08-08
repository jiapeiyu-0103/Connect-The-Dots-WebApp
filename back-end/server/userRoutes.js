const express = require("express")
const User = require("./userModels/userModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */


// 

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
	console.log('>>> get all users from database')
})

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
	console.log(`>> save a new user with userID: ${user.userID} to database`)
	res.send(user)
})

router.get("/users/:id", async (req, res) => {
	const user = await User.findOne({ userID: req.params.id })
	res.send(user)
	console.log(`>> get a user with userID: ${user.userID} from database`)
})

router.get("/checkUserName/:username", async (req, res) => {
	const user = await User.findOne({ username: req.params.username })
	res.send(user)
})

router.patch("/users/:id", async (req, res) => {
	const {userID, username, password, sex, photo, birthday} = req.body
	console.log(req.body)
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