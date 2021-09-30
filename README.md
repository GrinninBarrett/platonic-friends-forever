# 🎣 PFFs (Platonic Friends Forever)

A simple way to meet like-minded people in your area, PFF matches people based on their shared interests. Whether you like to attend major-league baseball games or play video games, through PFF you will be able to find your Platonic Friends Forever.

The application uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models, and an [Express.js](https://expressjs.com/) API for Controllers.

---

## User Story
```
AS A person who wants to make new friends
I WANT an application that will match me with people in my area 
SO THAT I can meet new people nearby who share the same interests
```

## Link to Deployed Application

[Deployed Application](https://pfforever.herokuapp.com/)

## Table of Contents

- [Technologies](#technologies)
- [Functionality](#functionality)
- [Challenges](#challenges)
- [Future Development](#future-development)
- [Contact](#contact)
- [License](#license)

## Technologies

#### Front End
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebars&logoColor=white)&nbsp;
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![Materialize](https://img.shields.io/badge/-materialize--css-ff69b4?style=for-the-badge&logo=materialize--css&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

#### Back End
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![MySQL](https://img.shields.io/badge/MySQL-coral?style=for-the-badge&logo=mysql&logoColor=darkblue)&nbsp;
![Sequelize](https://img.shields.io/badge/Sequelize-blue?style=for-the-badge&logo=Sequelize)&nbsp;

#### Communication
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)&nbsp;
![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)


## Functionality
#### Screenshots of Application
![Homepage](./assets/images/homepage.png "PFF Homepage")

![Signup Page](./assets/images/signup-page.png "PFF Signup Page")

![Profile Page](./assets/images/profile-page.png "PFF User Profile Page")



## Challenges

* Creating the appropriate routes and models to form associations between users
* Creating associations between users and tags
* Filtering view results by location and/or common interest

## Future Development

* Include geolocation API to only show users who are nearby
* Filter results by common interest
* Allow in-app chat between users who have followed each other
* Upload photos from user's computer for profile picture
* Be more considerate of accessibility
* Allow users to block or report other users

## Contact

* Tucker Barrett - [ctbarrett.tech@gmail.com](mailto:ctbarrett.tech@gmail.com)

* Pam Hammond - [hammondpamelac@gmail.com](mailto:hammondpamelac@gmail.com)

* Emma Robinson - [robinsonecu14@gmail.com](mailto:robinsonecu14@gmail.com)

* Chris Thomas - [christhomas2101@gmail.com](mailto:christhomas2101@gmail.com)

## License

&copy; 2021 PFF

[MIT License](https://opensource.org/licenses/MIT)
