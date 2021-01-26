// This file is useful for collecting all of our models and exporting them in
// one place. It's also a good place to define associations (e.g. one-to-many)
const db = require('./db')
const Plant = require('./plant')

module.exports = {
  db,
  Plant
}
