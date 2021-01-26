// This is our seed file. We'll import our Sequelize models from
// ./database/index and create some dummy data in the database. Seeding a
// database is very useful for development.
const { blue, cyan, green, red } = require('chalk');
const { db, Plant } = require('./database');

async function seed() {
  try {
    console.log(cyan('📡 Connecting to the database...'));
    // Connect to the database

    console.log(blue('🌱 Seeding the database...'));

    // Seed the database

    // Close the database connection
    await db.close();

    console.log(green('🌲 Finished seeding the database!'));
    await db.close();
  } catch (err) {
    console.log(red('🔥 An error occured!!'));
    console.error(err);
    await db.close();
  }
}
seed();
