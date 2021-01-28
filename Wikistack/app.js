const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const { db, User, Page } = require('./models');
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

const init = async () => {
  await User.sync({ force: true });
  await Page.sync({ force: true });
  app.listen(PORT, () => {
    console.log('App is listening on port 1337 ');
  });
};
init();
