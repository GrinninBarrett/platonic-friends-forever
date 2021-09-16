const { User } = require('../models');

const userData = [
  {
    first_name: 'Bob',
    last_name: 'Marley',
    state: 'NC',
    city: 'Apex',
    email: 'test@gmail.com',
    password: 'password1'
  },  
  {
    first_name: 'Gene',
    last_name: 'Simmons',
    state: 'NC',
    city: 'Raleigh',
    email: 'test2@gmail.com',
    password: 'password2'
  }, 
  {
    first_name: 'Robbert',
    last_name: 'Plant',
    state: 'NC',
    city: 'Cary',
    email: 'test3@gmail.com',
    password: 'Password3'
  }, 
  {
    first_name: 'Paul',
    last_name: 'Blart',
    state: 'NC',
    city: 'Durham',
    email: 'test4@gmail.com',
    password: 'password4'
  }, 
  {
    first_name: 'Naruto',
    last_name: 'Uzumaki',
    state: 'NC',
    city: 'Wilson',
    email: 'test5@gmail.com',
    password: 'Password5'
  }, 
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;