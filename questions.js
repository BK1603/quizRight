var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    points: Number
});

var Question = mongoose.Model('Questions', questionSchema);