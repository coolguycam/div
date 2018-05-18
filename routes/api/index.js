const router = require("express").Router();
const gifRoutes = require("./gifs");

// Book routes
router.use("/gifs", gifRoutes);

module.exports = router;
