const { Client } = require('pg');
const postgresURL = 'postgress://localhost/wnews';
const client = new Client(postgresURL);

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = client;
