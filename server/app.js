var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');
var ObjectID = mongodb.ObjectID;

var app = express();

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log("Database connection ready");
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(path.join(__dirname, '/../public'));
app.use(express.static(path.join(__dirname, '/../public')));


app.use('/', routes);

module.exports = app;