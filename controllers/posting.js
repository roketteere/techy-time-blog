const router = require("express").Router();

router.get("/", (req, res) => {
  req.session.username
    ? res.render("dashboard", {
        dashboard: { name: "Dashboard Blog Post Editor" },
        posting: true,
        display: { message: "Look who is creating a new post, " },
        user: { name: req.session.username },
        items: [
          {
            name: "formpost",
          },
        ],
      })
    : res.redirect("/login");
});

module.exports = router;
