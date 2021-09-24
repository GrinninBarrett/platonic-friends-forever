const { User } = require("../models");

const userData = [
  {
    first_name: "Bob",
    last_name: "Marley",
    state: "NC",
    city: "Apex",
    bio: "I like music and soccer",
    profile_pic: "https://i2-prod.mirror.co.uk/incoming/article19032014.ece/ALTERNATES/s1200c/2_Bob-Marley-At-HomeedjpgED.jpg",
    email: "test@gmail.com",
    password: "password1",   
  },
  {
    first_name: "Gene",
    last_name: "Simmons",
    state: "NC",
    city: "Raleigh",
    bio: "I like makeup and metal",
    profile_pic: "https://www.rollingstone.com/wp-content/uploads/2018/06/gene-simmons-home-deliver-box-set-31e29fe6-b093-43aa-bdb0-e3f54b6cf6e1.jpg",
    email: "test2@gmail.com",
    password: "password2",    
  },
  {
    first_name: "Robert",
    last_name: "Plant",
    state: "NC",
    city: "Cary",
    bio: "Have you ever heard of of stairway to heaven",
    profile_pic: "https://www.cheatsheet.com/wp-content/uploads/2020/10/robert-plant-80s-1200x796.jpg",
    email: "test3@gmail.com",
    password: "Password3",
  },
  {
    first_name: "Paul",
    last_name: "Blart",
    state: "NC",
    city: "Durham",
    bio: "I am basically a real cop",
    profile_pic: "https://pyxis.nymag.com/v1/imgs/d95/e05/ebe005867dedfb1c774db5bfac2e4f13cf-17-paul-blart-mall-cop-2.rsquare.w700.jpg",
    email: "test4@gmail.com",
    password: "password4",
  },
  {
    first_name: "Naruto",
    last_name: "Uzumaki",
    state: "NC",
    city: "Wilson",
    bio: "I will be hokage one day",
    profile_pic: "https://www.giantbomb.com/a/uploads/square_medium/3/39164/1181291-untitled_1.png",
    email: "test5@gmail.com",
    password: "Password5",    
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
