var http = require('http');
var fs = require('fs');
var readMe = fs.readFileSync('input.txt', 'utf8');
console.log(readMe);

var server = http.createServer(function(req, res){

  if (req.url === '/')
  {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/home.html').pipe(res);
  }
  else if (req.url === '/index'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if (req.url === '/data/json')
    {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    json =[
      {
        id: 1,
        item: 'This is json item 1'
      },
      {
        id: 2,
        item: 'This is json item 2'
      }
    ]
    res.end(JSON.stringify(json))
  }
  else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
  res.writeHead(200, {'Content-Type': 'text'});
   var myReadStream = fs.createReadStream(__dirname + '/input1.txt');
   myReadStream.pipe(res);
});
server.listen(3005, '127.0.0.1');
console.log('Yo! Listening to 3000 port')
