const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    const data = await userData.get({ plain: true });
    data
      ? req.session.save(() => {
          req.session.username = data.username;
          req.session.logged_in = true;
          res.status(200).redirect("/dashboard");
        })
      : res.status(400).redirect("/signlog");
  } catch (err) {
    console.log(err);
    res.status(400).redirect("/signlog");
  }
});

module.exports = router;
