const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const { db } = require('./models');
const layout = require('./views/layout');

const app = express();
db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(layout(' '));
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log('App listening on port 1337 ');
});
