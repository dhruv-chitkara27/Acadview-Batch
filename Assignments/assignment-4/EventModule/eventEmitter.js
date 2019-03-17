var events = require('events');
// We will use util module here.
// A util module helps to inherit the property of one module into another.
var util = require('util');


// Let's see how it works.
// We create a constructor Person and we would want these Persons to have the ability to emit events.

var Person = function(name){
  // this allows, the function with any object created(jeremy, alison, cate) to utilise this function
  this.name = name;
}

// The util.inherits() function is giving the Person to have emit() function.
util.inherits(Person, events.EventEmitter);

var jeremy = new Person('Jeremy');
var alison = new Person('Alison');
var cate = new Person('Cate');

var people = [jeremy, alison, cate];

people.forEach(function(Person){
  Person.on('says', function(msg){
    console.log(Person.name + ' Says : ' + msg);
  })
})

jeremy.emit('says', 'What\'s Up');
alison.emit('says', 'Enemies Ahead');
cate.emit('says', 'Get to the safe zone!');
