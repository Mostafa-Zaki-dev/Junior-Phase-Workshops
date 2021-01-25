const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/posts');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.redirect('/posts');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
