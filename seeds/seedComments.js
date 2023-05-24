const { Comment } = require("../models");
const faker = require("faker");

const seedComments = async (numComments = 10) => {
    const commentData = [];

    for (let i = 0; i < numComments; i++) {
        commentData.push({
            comment_text: faker.lorem.text(),
            user_id: Math.floor(Math.random() * 5) + 1,
            post_id: Math.floor(Math.random() * 5) + 1,
        });
    }

    await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
