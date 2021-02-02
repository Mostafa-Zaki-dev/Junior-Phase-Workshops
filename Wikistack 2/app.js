const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { notFound, errorHandler } = require('./views/');

app.use(morgan('dev')); //logging middleware
app.use(express.static(path.join(__dirname, './public'))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());
app.use(require('method-override')('_method'));

app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));

app.get('/', function (req, res) {
  res.redirect('/wiki/');
});
app.use((req, res, next) => {
  res.status(404).send(notFound());
});
app.use((err, req, res, next) => {
  res.status(500).send(errorHandler());
});

module.exports = app;
