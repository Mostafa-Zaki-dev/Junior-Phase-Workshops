const express = require('express');
const app = express();
const session = require('express-session');
const chalk = require('chalk');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(
  session({
    secret: 'some s0rt 0f s3cr3!',
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  if (!req.session.counter) req.session.counter = 1;
  console.log(chalk.blue('counter: ', ++req.session.counter));
  console.log(chalk.bgBlue('req.session: '), req.session);
  console.log(chalk.bgRed('req.session.id: '), req.session.id);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Welcome');
});

const PORT = 8080;

app.listen(PORT, () => console.log(chalk.bgGreen('Listening at http://localhost:8080')));
