const express = require('express');
const morgan = require('morgan');
const path = require('path');
const postBank = require('./postBank');
const postContent = require('./postContent');
const postList = require('./postList');
const errorHandler = require('./errorHandler');
const staticMiddleware = express.static(path.join(__dirname, 'public'));

const app = express();

app.use(morgan('dev'));
app.use(staticMiddleware);

app.get('/', (req, res, next) => {
  const posts = postBank.list();
  res.send(postList(posts));
});

app.get('/posts/:id', (req, res, next) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (post.id) {
    res.send(postContent(post));
  }
  next();
});

const PORT = 1337;

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
