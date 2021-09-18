const router = require('express').Router();
const { User, Tag } = require('../../models');


// Get all users
router.get("/", async (req, res) => {
  // find all tags
  try {
    const userData = await User.findAll({
      include: [{ model: Tag, as: "tags" }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get single user by ID
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Tag, as: "tags" }],
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with that id." });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!userData) {
      res.status(400).json({ message: 'No user with that id.'});
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Log a user in, checking for correct credentials
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


// Log a user out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
