const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const Sequelize = require('sequelize');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log('App listening on port 1337 ');
});
