/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

const mongoose = require("mongoose")
const schema = mongoose.Schema({
	title: String,
	content: String,
})

module.exports = mongoose.model("DataEntry", schema)