const router = require("express").Router();

// Sample route to render template
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
router.get("/", (req, res) => {
  res.render("signlog", {
    logged: false,
    items: [
      {
        name: "signlog",
      },
    ],
  });
});

module.exports = router;
