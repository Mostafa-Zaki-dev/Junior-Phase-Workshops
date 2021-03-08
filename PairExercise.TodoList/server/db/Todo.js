const Sequelize = require('sequelize');
const db = require('./db');

const Todo = db.define('todos', {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Todo;
