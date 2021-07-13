/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	userID: String,
	title: String,
	content: String,
	weather: String,
	wea_emoji: String,
	emotion: String,
	emo_emoji: String,
	activity: String,
	act_emoji: String,
	like: Boolean,
	date: {type: Date, default: Date.now()},
	audio: Array,
	pics: Array,
	video: Array,
});

module.exports = mongoose.model("DiaryEntry", schema);
