module.exports = (req, res, next) => {
  res.status(404);
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>404 Not Found</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body> 
  <p>
    <img class='not-found' src='/error.jpg' alt='404 Not Found'>
    </p>
  </body>
  </html>`);
};
