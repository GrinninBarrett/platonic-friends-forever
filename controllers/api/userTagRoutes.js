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






module.exports = router;
