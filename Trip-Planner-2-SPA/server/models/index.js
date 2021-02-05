const db = require('./_db');
const Place = require('./Place');
const Hotel = require('./Hotel');
const Activity = require('./Activity');
const Restaurant = require('./Restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  db,
  Place,
  Hotel,
  Activity,
  Restaurant,
};
