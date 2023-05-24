const { Permission } = require('../models');
const faker = require('faker');

const seedPermissions = async (numPermissions = 4) => {
    const permissionData = [];

    for (let i = 0; i < numPermissions; i++) {
        permissionData.push({
            permission_name: faker.name.jobType()
        });
    }

    await Permission.bulkCreate(permissionData);
};

module.exports = seedPermissions;
