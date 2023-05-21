const router = require("express").Router();

router.post("/", (req, res) => {
  console.log(req.body);

  req.session.username
    ? res.render("dashboard", {
        dashboard: { name: "Dashboard Blog Post Editor" },
        posting: true,
        display: { message: "Look who is creating a new post, " },
        user: { name: req.session.username },
        post: req.body,
        items: [
          {
            name: "postedit",
            post: req.body,
          },
        ],
      })
    : res.redirect("/signlog");
});

module.exports = router;
