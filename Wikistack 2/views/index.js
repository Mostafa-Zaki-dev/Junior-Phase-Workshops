const layout = require('./layout');
const addPage = require('./addpage');
const editPage = require('./editpage');
const main = require('./main');
const userList = require('./userlist');
const userPages = require('./userpages');
const wikiPage = require('./wikipage');
const notFound = require('./notFound');
const errorHandler = require('./errorHandler');

module.exports = {
  layout,
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
  notFound,
  errorHandler,
};
