// node is an Event Based System, meaning that it is built around the idea that
// certain events will occur and will trigger a response from the system. This is
// a very common pattern in programming and is used in many different languages and
// frameworks.


// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
  console.log('Celebrate ' + data);
}

// We create an instance of the EventEmitter class and save a reference to it in an myEmitter variable
let myEmitter = new events.EventEmitter();


// We can use the on method to listen for a specific event and then run a callback function when that event occurs
myEmitter.on('celebration', listenerCallback);

// We can use the emit method to trigger the event and run the callback function
myEmitter.emit('celebration', 'birthday');
