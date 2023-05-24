const { Post } = require("../models");
const faker = require("faker");

const seedPosts = async (numPosts = 10) => {
    const postData = [];

    for (let i = 0; i < numPosts; i++) {
        postData.push({
            title: faker.lorem.sentence(),
            post_content: faker.lorem.paragraph(),
            user_id: Math.floor(Math.random() * 10) + 1,
            post_url: faker.internet.url(),
            slug: faker.lorem.slug(),
        });
    }

    await Post.bulkCreate(postData);
};
module.exports = seedPosts;
