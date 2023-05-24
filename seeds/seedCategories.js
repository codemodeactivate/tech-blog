const { Category } = require("../models");
const faker = require("faker");

const seedCategories = async (numCategories = 10) => {
    const categoryData = [];

    for (let i = 0; i < numCategories; i++) {
        categoryData.push({
            category_name: faker.name.jobType(),
        });
    }

    await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
