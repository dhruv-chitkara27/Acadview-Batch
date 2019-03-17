var fs = require('fs');

// Because it's asynchronous we need a callback function to fire when the process is complete
// This below code is non-blocking code
// Ex: If your website has multiple requests then your code will not be waiting for processing each request sequentially.

var readMe = fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile(`writeText.txt`, data, function(err){
    if (err) throw err;
  });
});

console.log('Async at work');
