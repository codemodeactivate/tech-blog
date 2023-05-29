const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Role = require('./Role');
const Category = require('./Category');
const Tag = require('./Tag');
const Permission = require ('./Permission');

Tag.belongsToMany(Post, {
    through: 'postTag',
    foreignKey: 'tag_id'
});

Post.belongsToMany(Tag, {
    through: 'postTag',
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});

Post.belongsToMany(Category, {
    through: 'postCategory',
    foreignKey: 'category_id'
});

Category.belongsToMany(Post, {
    foreignKey: 'category_id',
    through: 'postCategory'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comments'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    as: 'post'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE', //delete all comments when post is deleted.
    as: 'comments'
});

User.belongsToMany(Role, {
    through: 'user_role',
    foreignKey: 'user_id'
});

Role.belongsToMany(User, {
    through: 'user_role',
    foreignKey: 'role_id'
});

Permission.belongsToMany(Role, {
    through: 'rolePermission',
    foreignKey: 'permission_id'
});

Role.belongsToMany(Permission, {
    through: 'rolePermission',
    foreignKey: 'role_id'
});


module.exports = {
    User,
    Post,
    Comment,
    Role,
    Category,
    Tag,
    Permission
 };
