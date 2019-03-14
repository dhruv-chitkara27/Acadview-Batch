var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var jamie = new Person('Jamie');
var cate = new Person('Cate');
var george = new Person('George');

var people = [jamie,cate,george];

people.forEach(function(Person) {
    Person.on('says', function(msg){
      console.log(Person.name + ": " + msg);
    })
});

jamie.emit('says', 'Hi! Good Morning');
cate.emit('says', 'We should have breakfast!');
george.emit('says', 'No guys, I have MERN class');
