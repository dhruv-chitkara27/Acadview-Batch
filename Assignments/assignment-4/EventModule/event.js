/*
  Node js has inbuilt modules which we can use.
  instead of giving the the location like ('./<module>')we can directly give the name of the module
  and node will recognise that and will fetch it.
*/

var events = require('events');
// Now the module.exports from the event module is stored in the events variable here.
// One of the exports of this event module is event emitter
// In jQuery we write: elements.on('click', function(){})
// We can use that emitter to create custom events and then react to those events. 
// Example:

var myEmitter = new events.EventEmitter();
// Now we have stored this emitter to myEmitter and we can wire up events to this emitter.

myEmitter.on('someEvent', function(message){
  console.log(message);
});

// Now we have our event added we need to use this event.
// We use the emit() function to emit our events.
// first argument ---> event we created, second argument ---> the message to callback function.
myEmitter.emit('someEvent', 'My custom event');
