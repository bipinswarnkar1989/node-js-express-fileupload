var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name:String,
	photo:String
});

module.exports = mongoose.model('User',userSchema);