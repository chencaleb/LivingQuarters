var mongoose = require('mongoose'),
		// User = require('./User'),
		// Chore = require('./Chore'),
		Schema = mongoose.Schema;

var HouseSchema = new Schema ({
	name: String, 
	address: String,
	// users: [], 
	chores: [{
		task: String,
		isCompleted: Boolean,
		completedAt: { type: Date, default: new Date()},
		upvotes: Number,
		completedBy: String,
		comments: [String]
	}],
	announcements: [{
		content: String,
		author: String,
		createdAt: { type: Date, default: new Date()}
	}]
});

var House = mongoose.model('House', HouseSchema);
module.exports = House;