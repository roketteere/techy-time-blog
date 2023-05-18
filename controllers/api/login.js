const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { username, email, password, cpassword } = req.body;

  password === cpassword
    ? (req.body.password = bcrypt.hashSync(req.body.password, 3)) &&
      res.status(200).json({ success: "Signed Up!" })
    : res
        .status(400)
        .json({ error: "Passwords Do Not Match! Nice Try! =) 💉" });
});

module.exports = router;
