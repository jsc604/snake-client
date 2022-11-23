const { stdin } = require('process');
const connect = require('./client');

console.log("Connecting ...");
connect().on('data', (data) => {
  console.log(data);
});

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();