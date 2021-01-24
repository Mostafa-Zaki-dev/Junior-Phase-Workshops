const express = require('express');
const morgan = require('morgan');
// const postBank = require('./postBank');

/* Instead of postBank -Non-Persistent Server-Side Data Storage- 
we will make a RDBMS client -pg client- to interact with our Persistent Server-side- Dats Storage */

const postList = require('./views/postList');
const postDetails = require('./views/postDetails');
const client = require('./db/index'); // importing the database driver client

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const mainQuery = 'SELECT * FROM posts JOIN users ON users.id = posts.userid';

app.get('/', async (req, res) => {
  try {
    // const posts = postBank.list();  /*  comment in if you are using postBank */
    const data = await client.query(mainQuery); /*  comment in if you are using pg client */
    const posts = data.rows; /* comment in if you are using pg client */
    res.send(postList(posts));
  } catch (err) {
    console.log(err);
    res.status(500).send(`Something went wrong: ${err}`);
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    // const post = postBank.find(req.params.id); /*  comment in if you are using postBank */
    const data = await client.query(
      `${mainQuery} WHERE posts.id = ${+req.params.id}`
    ); /* comment in if you are using pg client */
    const post = data.rows[0]; /* comment in if you are using pg client */
    res.send(postDetails(post));
  } catch (err) {
    console.log(err);
    res.status(500).send(`Something went wrong: ${err}`);
  }
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
