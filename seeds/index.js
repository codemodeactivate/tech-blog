// seeds/index.js
const seedUsers = require('./seedUsers');
const seedPosts = require('./seedPosts');
const seedTags = require('./seedTags');
const seedRoles = require('./seedRoles');
const seedPermissions = require('./seedPermissions');
const seedComments = require('./seedComments');
const seedCategories = require('./seedCategories');


const sequelize = require('../config/connection');


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedTags();
    await seedPosts();
    await seedRoles();
    await seedPermissions();
    await seedComments();
    await seedCategories();

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
