const express = require('express');
const app = express();
const PORT = 1337;

app.get('/', (req, res) => {
  res.send(`
  <h1> Welcome to my site ! </h1>
  <ul>
    <li><a href="/Dogs"> Check dogs </a> </li>
    <li> <a href="/cAts"> Check cats </a> </li>
  </ul>
  
  
  `);
});

app.get('/dogs', (req, res) => {
  res.send(`
  <h1> dogs </h1>
  <img
     src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
     alt="puppy 1" height = 40%>
  <img
     src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
     alt="puppy 2" height = 40%>   
  `);
});

app.get('/cats', (req, res) => {
  res.send(`
  <h1> cats </h1>
  <img
     src="https://cdn.mos.cms.futurecdn.net/otjbibjaAbiifyN9uVaZyL.jpg"
     alt="puppy 1" height= 40%>
  `);
});

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

server.on('connection', () => {
  console.log('hey there someone connected');
});
