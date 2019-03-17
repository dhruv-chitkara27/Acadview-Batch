// Wheneve we write a node.js program we don't dumpit in one file.
// It becomes difficult to manage and read later.
// So we split our code into logical modules and use them depending on the functionality.
// We call upon them and use them where ever required.
// Module is essentially a js file.

var counter = function(arr){
  return 'this array has ' + arr.length + ' elements';
};

// console.log(counter(['p1', 'p2', 'p3']));

// We use module.exports to export the variables we want to export from the particular file.
// In this case we want to export counter function.
// If we do not export this and try to use it new file it will throw an error.
module.exports = counter;
