module.exports = (post) => `  <!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
        <p>
          ${post.title}
          <small>(by ${post.name})</small>
        </p>
        <p>
          ${post.content}
        </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
      </div>
      <p> </p>
      <a class='back-home'  href='/'> Back Home </a>
      
  </div>
</body>
</html>`;
