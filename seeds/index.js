const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');
const seedUserLikes = require('./user-like-seeds');
const seedUserTags = require('./user-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedUserLikes();
  console.log('\n----- USERS LIKED USERS SEEDED -----\n');

  await seedUserTags();
  console.log('\n----- USER TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();