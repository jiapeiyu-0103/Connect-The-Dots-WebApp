const express = require("express")
const Post = require("./messageModels/messageModelExample")
const router = express.Router()

/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
})

router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	await post.save()
	res.send(post)
})

router.get("/posts/:id", async (req, res) => {
	const post = await Post.findOne({ _id: req.params.id })
	res.send(post)
})

module.exports = router