const layout = require('./layout');
const html = require('html-template-tag');

module.exports = () => layout(html` <img class="error" src="/404.jpg" alt="404-Not-Found" /> `);
