//Function expression
var myModule = require('./myModule');

console.log(myModule.counter(['a','b','c']));

console.log(myModule.multiplication(3,5));

console.log(myModule.multiplication(myModule.constant,10));
