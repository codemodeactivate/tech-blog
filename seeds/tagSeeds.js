const { Tag } = require('../models');
const faker = require('faker');


const seedTags = async (numTags = 10) => {
    const tagData = [];

    for (let i = 0; i < numTags; i++) {
        tagData.push({
        tag_name: faker.lorem.word()
        });
    }

    await Tag.bulkCreate(tagData);
};

module.exports = seedTags;
