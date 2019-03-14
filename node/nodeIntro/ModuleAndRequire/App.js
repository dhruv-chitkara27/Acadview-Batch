/*
  We want to use the module here. So we use the global object called require()
  If we just use require('<path of the file>'); it will make the module available
  but then we want to access particular function so we use a variable and our module will be assigned to the variable.
*/
var counter = require('./moduleAndRequire');



console.log(counter(['p1', 'p2', 'p3']));
