// seeds/index.js
const seedUsers = require('./userSeeds');
//const seedPosts = require('./postSeeds');
// ...other seed files...

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  //await seedPosts();
  // ...other seed functions...

  process.exit(0);
};

seedAll();