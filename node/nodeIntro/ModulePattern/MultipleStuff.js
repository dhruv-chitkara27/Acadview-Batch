var counter = function(arr){
  return 'this array has ' + arr.length + ' elements';
};

var addition = function(a, b){
  // back ticks
  return `The sum is ${a + b}`;    // This is a template string which helps us to write an expression inside using ${}. It's an es6 addition.
};

var constants = 5.987;


// Now module.exports is an empty object so everytime we assign a new variable it get's added to the object.
module.exports.counter = counter;
module.exports.addition = addition;
module.exports.constants = constants;

// Above code can also be written like: (Object Literals notation)
    // module.exports = {
    //   counter: counter,
    //   addition: addition,
    //   constants: constants
    // };
