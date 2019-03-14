var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('myEvent', function(msg) {
  console.log(msg);
});

myEmitter.emit('myEvent', 'This is my custom event');
