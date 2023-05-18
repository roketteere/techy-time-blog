const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.json({ Message: "Logout Success!" });
});

module.exports = router;
