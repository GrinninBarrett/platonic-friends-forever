const { UserLike } = require('../models');

const userLikeData = [
  {
    user_id: 1,
    user_liked_user_id: 2,
  },    
  {
    user_id: 1,
    user_liked_user_id: 3,
  }, 
  {
    user_id: 1,
    user_liked_user_id: 4,
  }, 
  {
    user_id: 2,
    user_liked_user_id: 1,
  },    
  {
    user_id: 2,
    user_liked_user_id: 3,
  }, 
  {
    user_id: 2,
    user_liked_user_id: 4,
  }, 
  {
    user_id: 3,
    user_liked_user_id: 1,
  },    
  {
    user_id: 3,
    user_liked_user_id: 4,
  }, 
  {
    user_id: 3,
    user_liked_user_id: 5,
  }, 
  {
    user_id: 4,
    user_liked_user_id: 1,
  },    
  {
    user_id: 4,
    user_liked_user_id: 2,
  }, 
  {
    user_id: 5,
    user_liked_user_id: 1,
  }, 
];

const seedUserLikes = () => UserLike.bulkCreate(userLikeData);

module.exports = seedUserLikes;