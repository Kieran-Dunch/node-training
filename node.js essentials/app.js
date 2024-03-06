// node is an Event Based System, meaning that it is built around the idea that
// certain events will occur and will trigger a response from the system. This is
// a very common pattern in programming and is used in many different languages and
// frameworks.

// Events module

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

//  User Input/Output

// stdout is a writable stream that we can use to output data to the console
// write method is used to write data to the console
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

// stdin is a readable stream that we can use to read data from the console
// on method is used to listen for a specific event and then run a callback function when that event occurs
// in this case we are listening for the 'data' event which occurs when the user enters input
// when the 'data' event occurs, we run the playGame function
process.stdin.on('data', playGame);


// error handling

// the error module is within the global object

// many async use error first callbacks, meaning that the first argument of the
// callback function is an error object, and the second is the data

// ex.
const errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // err was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
};

// error-first callbacks are a standard way of handling errors in Node.js
// if an error occurs, the first argument of the callback will be an Error object
// if an error does not occur, the first argument will be null

// buffer module

// the buffer module is within the global object and is used to handle binary data

// Allocate buffer of size 15 filled with 'b'
// .alloc is a method that creates a buffer of a specified size and fills it with a specified value
const bufferAlloc = Buffer.alloc(15, 'b');

// Create buffer1 with 'hello' and buffer2 with 'world'
// .from is a method that creates a buffer from a string
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');

// Create a variable named bufferArray and set it equal to an array that contains buffer1 and buffer2.
// Then, pass bufferArray to the .concat() method to combine the two buffers into a new Buffer object.
// Save the result to a const variable named bufferConcat.
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);


// The FS module
// The fs module is a built-in module that provides a way to interact with the file system
// it includes such methods like readFileSync, readFile, writeFile, and unlink
// readFile and writeFile use error-first callbacks
// Example:

const fs = require('fs');
const readFileCallback = (err, data) => {
  if (err) {
    console.log('error')
  } else {
    console.log(data)
  }
}

// read file takes three arguments: the file to read, the encoding of the file, and the callback function
fs.readFile('finalFile.txt', 'utf-8', readFileCallback)
