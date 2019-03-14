// Normal Function statement

// We invoke a Normal function by calling it.

function one(){
  console.log('Normal Function');
}

one();

// Function expression
// We can assign a function to variable and that whole expression is a function expression

var two = function(){   // ----> function() is called an anonymous function. this anonymous function is being assigned to a variable
  console.log('Inside two');
}
// Above expression is called function expression and we use this often when we write code in node js.

// We invoke the function as following
two();

// We can also pass functions as an argument to another function.
//Example:

function three(someFun){
  someFun();
}

three(two);
