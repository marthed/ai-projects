var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(path.join(__dirname, '/../public'));
app.use(express.static(path.join(__dirname, '/../public')));


app.use('/', routes);

module.exports = app;