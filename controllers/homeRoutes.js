const router = require('express').Router();
const { User, Tag, UserLike } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all users
    // const userData = await User.findAll({
    //   include: [
    //     {
    //       model: Tag,
    //       attributes: ['tag_name'],
    //     },
    //   ],
    // });

    res.render('homepage');

    // Serialize data so the template can read it
    // const users = userData.map((user) => user.get({ plain: true }));

    // // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   users, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get single user by ID
router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Tag,
          attributes: ['tag_name'],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render('user', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tag }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to profile route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
})


router.get('/swipe', withAuth, async (req, res) => {
  try {
    // Get all users
    const userData = await User.findAll({
      include: [
        {
          model: Tag,
          attributes: ['tag_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data and session flag into template
    if (req.session.logged_in) {
      res.render('swipe', { 
        users, 
        logged_in: req.session.logged_in 
      });
      return;
    }

    res.render('/login');

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/matched', withAuth, async (req, res) => {
  try {
    // Get all users
    const userData = await User.findAll({
      include: [
        {
          model: Tag,
          attributes: ['tag_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data and session flag into template
    if (req.session.logged_in) {
      res.render('matched', { 
        users, 
        logged_in: req.session.logged_in 
      });
      return;
    }

    res.render('/login');

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
