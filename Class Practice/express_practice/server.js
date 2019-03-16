var http = require('http');
var express = require('express');

var app = express();

var server = app.get('/about', (req, res) => {
  res.send('This is my express about route');
}).listen(3000, '127.0.0.1');
console.log('Listening to port number 3000!!!');
