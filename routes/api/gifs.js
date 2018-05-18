const router = require("express").Router();
const gifsController = require("../../controllers/gifsController");

// Matches with "/api/gifs"
router.route("/")
  .get(gifsController.findAll)
  .post(gifsController.create);

// Matches with "/api/gifs/:id"
router.route("/:id")
  .get(gifsController.findById)
  .put(gifsController.update)
  .delete(gifsController.remove);

module.exports = router;
