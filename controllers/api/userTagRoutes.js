const router = require('express').Router();
const { UserTag } = require('../../models');


// Get all UserTags
router.get("/", async (req, res) => {
    try {
      const userTagData = await UserTag.findAll();
      res.status(200).json(userTagData);
    } catch (err) {
      res.status(500).json(err);
    }
});


// Get single UserTag by ID
router.get("/:id", async (req, res) => {
    try {
      const userTagData = await UserTag.findByPk(req.params.id);
      if (!userTagData) {
        res.status(404).json({ message: "No UserTag found with that id." });
        return;
      }
      res.status(200).json(userTagData);
    } catch (err) {
      res.status(500).json(err);
    }
});


// Create a new UserTag
router.post('/', async (req, res) => {
    try {
      const userTagData = await UserTag.create(req.body);
      res.status(200).json(userTagData);
    } catch (err) {
      res.status(400).json(err);
    }
});


// Update a UserTag
router.put('/:id', async (req, res) => {
    try {
      const userTag = await UserTag.findByPk(req.params.id);
      const userTagData = await userTag.update(req.body);
      req.session.save(() => {
        req.session.user_id = userTagData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userTagData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


// Delete UserTag
router.delete('/:id', async (req, res) => {
    try {
      const userTagData = await UserTag.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!userTagData) {
        res.status(400).json({ message: 'No UserTag with that id.'});
        return;
      }
      res.status(200).json(userTagData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
