var fs = require('fs');

var readMe = fs.readFileSync('myReading.text', 'ascii');
fs.writeFileSync('writeMe.txt', readMe);

console.log('Reading and Writing');
