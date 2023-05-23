const { User } = require('../models');
const faker = require('faker');

const seedUsers = async (numUsers = 10) => {
  const userData = [];

  for (let i = 0; i < numUsers; i++) {
    userData.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  }

  await User.bulkCreate(userData);
};

module.exports = seedUsers;
