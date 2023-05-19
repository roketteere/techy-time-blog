const router = require("express").Router();

// Sample route to render template
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
router.get("/", (req, res) => {
  // check if user is logged in
  const user = { name: req.session.username };
  const logged = req.session.username ? true : false;
  req.session.username
    ? res.render("dashboard", {
        dashboard: { name: "Dashboard Home" },
        logged: true,
        display: { message: "Welcome to the dashboard, " },
        user: user,
        items: [
          {
            name: "post",
          },
        ],
      })
    : res.redirect("/login");
});

module.exports = router;
