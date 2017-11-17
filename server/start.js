var express = require('express');
var port = 8080;
var hostname = 'Martins server';

var app = express();

app.get('/', function(req, res){
  res.json('hello world');
});

app.listen(port, function(){
  console.log(`Listning on ${port}.`);
});