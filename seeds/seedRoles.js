const { Role } = require('../models');
const faker = require('faker');

const seedRoles = async (numRoles = 4) => {
    const roleData = [];

    for (let i = 0; i < numRoles; i++) {
        roleData.push({
            role_name: faker.name.jobType()
        });
    }

    await Role.bulkCreate(roleData);
};

module.exports = seedRoles;
