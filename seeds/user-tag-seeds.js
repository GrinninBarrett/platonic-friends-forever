const { UserTag } = require('../models');

const userTagData = [
  {
    user_id: 1,
    tag_id: 1,
  },  
  {
    user_id: 1,
    tag_id: 2,
  },  
  {
    user_id: 1,
    tag_id: 3,
  },  
  {
    user_id: 2,
    tag_id: 1,
  },  
  {
    user_id: 2,
    tag_id: 2,
  },  
  {
    user_id: 3,
    tag_id: 3,
  },  
  {
    user_id: 3,
    tag_id: 4,
  }, 
  {
    user_id: 4,
    tag_id: 5,
  }, 
  {
    user_id: 4,
    tag_id: 6,
  }, 
  {
    user_id: 5,
    tag_id: 6,
  }, 
  {
    user_id: 5,
    tag_id: 7,
  }, 
  {
    user_id: 5,
    tag_id: 2,
  }, 
];

const seedUserTags = () => UserTag.bulkCreate(userTagData);

module.exports = seedUserTags;
