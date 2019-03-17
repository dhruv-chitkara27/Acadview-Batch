// var counter = require('./MultipleStuff');


// we will change the var name to stuffs because we are using multiple functions from the module.
var stuffs = require('./MultipleStuff');

// We can now access the counter function using the dot operator because counter is now a property of module.exports Object.
console.log(stuffs.counter(['p1', 'p2', 'p3']));

console.log(stuffs.addition(5, 7));

console.log(stuffs.addition(stuffs.constants, 5));
