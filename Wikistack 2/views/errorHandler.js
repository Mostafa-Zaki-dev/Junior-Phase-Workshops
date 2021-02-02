const layout = require('./layout');
const html = require('html-template-tag');

module.exports = () => layout(html` <img class="error" src="/500.png" alt="500-Server-Error" /> `);
