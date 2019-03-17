var fs = require('fs');

// fs.mkdir('practice', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./practice/myFile.txt', data, function(err){
//     })
//   })
// })

// to remove the above dir we need to first remove the file inside and then call the rmdir() to remove it.
fs.unlink('./practice/myFile.txt', function(err){});
fs.rmdir('practice', function(err){});

// ------------------OR----------------------- //
// We can use the async callbacks to remove like this:
fs.unlink('./practice/myFile.txt', () => {
  fs.rmdir('practice', ()=>{})
})
