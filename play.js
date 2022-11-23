const connect = require('./client');
const setupInput = require('./input');
let conn = connect();

// console.log("Connecting ...");
conn.on('data', (data) => {
  console.log(data);
});

setupInput(conn);