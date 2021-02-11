const { db, Contact } = require('./server/db');
const seedData = require('./seed-data.json');

(async function seedDatabase() {
  try {
    await db.sync({ force: true });
    await Promise.all(seedData.map((contact) => Contact.create(contact)));
    console.log(`
      Seed success!
    `);
    console.log('seedData>>>>>>', seedData);
  } catch (err) {
    console.error(err.stack);
  } finally {
    db.close();
  }
})();
