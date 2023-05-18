const router = require("express").Router();

// Sample route to render template
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
router.get("/", (req, res) => {
  const parsedCookie = req.cookies;
  req.cookies.maxAge = 100000;
  req.cookies.expires = new Date();
  req.cookies.honeydoo = "Joel";
  console.log(parsedCookie, req.session.cookie);

  res.render("main", {
    items: [
      {
        name: "blog",
      },
    ],
  });
});

module.exports = router;
