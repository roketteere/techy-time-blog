const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  req.session.username = null;
  res.render("logout", {
    logged: false,
    items: [
      {
        name: "logout",
      },
    ],
  });
});

module.exports = router;
