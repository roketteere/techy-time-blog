 const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  req.session.username = username;
  console.log(`Session Username: ${req.session.username}`);

  password && username
    ? (req.body.password = bcrypt.hashSync(req.body.password, 3)) &&
      res.status(200).send(
        req.session.username &&
          `<script>
    location.href = "/";
      </script>`
      )
    : res
        .status(400)
        .json({ error: "Passwords Do Not Match! Nice Try! =) 💉" });
});

module.exports = router;
