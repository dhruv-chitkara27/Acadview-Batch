var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
//
// myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res) {
  console.log('Requesting url is : ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'})
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');
  myReadStream.pipe(res);
  // res.end('Hi! We have our first response!!!')
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000!');
