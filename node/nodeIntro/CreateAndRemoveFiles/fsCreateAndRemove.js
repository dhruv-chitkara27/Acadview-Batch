// Node fs gives us method to create and remove directories.
var fs = require('fs');

/*
    We have seen how to create a new file. To remove a file we use unlink() method.
    We need to be sure of one thing while using unlink or unlinkSync.
        ---> The file that we are trying to remove should be present otherwise it will throw an error
*/

  // fs.unlinkSync('writeText.txt'); // for synchronous code.
  // fs.unlink('writeText.txt', function(err){   // Async needs callback functions
  //   if(err) throw err;
  // });

// fs.mkdirSync('newDir');
// fs.rmdirSync('newDir');

// Async removal --> we give it a callback function.
    fs.mkdir('newDir', function(err){
      if (err) throw err;
    })

    fs.rmdir('newDir', function(err){
      if (err) throw err;
    })
