const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send('Something went wrong: ' + err.message);
});

const PORT = 3000;

const init = async function () {
  try {
    // await db.sync()
    app.listen(PORT, function () {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

init();
