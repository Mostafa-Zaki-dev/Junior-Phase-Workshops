const Sequelize = require('sequelize');
const db = require('./db');

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  audioUrl: Sequelize.STRING,
  genre: Sequelize.STRING,
});

module.exports = Song;
