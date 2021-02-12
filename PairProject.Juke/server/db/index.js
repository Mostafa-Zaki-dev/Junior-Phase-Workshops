const db = require('./db');
const Album = require('./Album');
const Song = require('./Song');
const Artist = require('./Artist');

// ...and give them some nice associations here!

Song.belongsTo(Album);
Album.hasMany(Song);

Song.belongsTo(Artist);
Artist.hasMany(Song);

Album.belongsTo(Artist);
Artist.hasMany(Album);

module.exports = {
  db,
  Album,
  Song,
  Artist,
};
