const { User } = require("../models");

const userData = [
  {
    first_name: "Bob",
    last_name: "Marley",
    state: "NC",
    city: "Apex",
    bio: "I like music and soccer",
    email: "test@gmail.com",
    password: "password1",
  },
  {
    first_name: "Gene",
    last_name: "Simmons",
    state: "NC",
    city: "Raleigh",
    bio: "I like makeup and metal",
    email: "test2@gmail.com",
    password: "password2",
  },
  {
    first_name: "Robbert",
    last_name: "Plant",
    state: "NC",
    city: "Cary",
    bio: "Have you ever heard of of stairway to heaven",
    email: "test3@gmail.com",
    password: "Password3",
  },
  {
    first_name: "Paul",
    last_name: "Blart",
    state: "NC",
    city: "Durham",
    bio: "I am basically a real cop",
    email: "test4@gmail.com",
    password: "password4",
  },
  {
    first_name: "Naruto",
    last_name: "Uzumaki",
    state: "NC",
    city: "Wilson",
    bio: "I will be hokage one day",
    email: "test5@gmail.com",
    password: "Password5",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
