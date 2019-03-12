var counter = function(arr) {
  return 'Length of the array is ' + arr.length;
}

var multiplication = function(a,b) {
  return `The product of number is ${a*b}`
}

var constant = 10;

// module.exports.counter = counter;
// module.exports.multiplication = multiplication;
// module.exports.constant = constant;

module.exports = {
  counter: counter,
  multiplication: multiplication,
  constant: constant
}
