/* SOURCE: https://rahmanfadhil.com/express-rest-api/ */

const mongoose = require("mongoose")
const schema = mongoose.Schema({
	userID: {
        type: String,
        required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	sex: {
		type: String,
		enum: ['Male', 'Female'],
		required: true
	},
	birthday: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model("User", schema)