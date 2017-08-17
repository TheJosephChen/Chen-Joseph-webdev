var app = require('./express');
var express = app.express;

var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var localSecret = 'this is the secret';
//localSecret = process.env.SESSION_SECRET;
app.use(cookieParser());
app.use(session({
    secret: localSecret,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

require("./project/app");


var port = process.env.PORT || 3000;
app.listen(port);