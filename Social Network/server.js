var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste');

app.listen('3000', function (){
    console.log("Listening for Local Host 3000");
});