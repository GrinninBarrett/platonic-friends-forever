const User = require('./User');
const Tag = require('./Tag');
const UserLike = require('./UserLike');
const UserTag = require('./UserTag');

User.belongsToMany(User, {
    through: UserLike,
    as: 'main',
    foreignKey: 'main_id'
});

User.belongsToMany(User, {
    through: UserLike,
    as: 'liked',
    foreignKey: 'liked_id'
});

Tag.belongsToMany(User, {
    through: UserTag,
    foreignKey: 'tag_id'
});

User.belongsToMany(Tag, {
    through: UserTag,
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Tag,
    UserLike,
    UserTag,
  };