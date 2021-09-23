const router = require("express").Router();
const { UserLike } = require("../../models");


router.get("/", async (req, res) => {
  // find all tags
  try {
    const likeData = await UserLike.findAll();
    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const likeData = await UserLike.findByPk(req.params.id);
    if (!likeData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;