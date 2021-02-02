const layout = require('./layout');
const html = require('html-template-tag');

module.exports = () => layout(html` <img class="not-found" src="/404.jpg" alt="404-Not-Found" /> `);
