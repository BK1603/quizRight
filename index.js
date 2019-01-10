var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var User = require('./user');

const options = {
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost/quizRight', options, function (err) {
    if (err) throw err;
    console.log('Succesfully connected');
});

User.findOne({'name': 'Rishik'}, function(err, user) {
     console.log("%j", user);
});

app.get('/', function(req, res) {
    res.sendFile('public/index.html', {root: __dirname});
});

app.post('/login', function(req, res) {
    res.send(req.body.name);
    console.log("POST received");
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Quiz game running!!");
});