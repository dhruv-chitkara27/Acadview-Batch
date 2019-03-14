var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
//
// myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res) {
  console.log('Requesting url is : ' + req.url);
  res.writeHead(200, {'Content-Type' : 'application/json'})
  var object = {
    name: 'Chris',
    age: '34',
    hobby: 'Photography'
  }
  res.end(JSON.stringify(object));
  // res.end('Hi! We have our first response!!!')
});

server.listen(3001, '127.0.0.1');
console.log('Listening to port 3000!');
