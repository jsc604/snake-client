const { stdin } = require('process');
const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
connect().on('data', (data) => {
  console.log(data);
});

setupInput();