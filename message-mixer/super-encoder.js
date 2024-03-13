// Import the encryptors functions here.
const encryptors = require('./encryptors.js');

// Encryption functions
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;


const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const caesar = caesarCipher(str, 3);
  const symbol = symbolCipher(caesar);
  const reverse = reverseCipher(symbol);
  return reverse;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const reverse = reverseCipher(str);
  const symbol = symbolCipher(reverse);
  const caesar = caesarCipher(symbol, -3);
  return caesar;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  }
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  }

  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
