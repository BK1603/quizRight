var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    passwd: {
        type: String,
        required: true
    },
    score: Number
});

var User = mongoose.model('Users', userSchema);

module.exports = User;