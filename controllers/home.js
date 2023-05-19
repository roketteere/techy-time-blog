const router = require("express").Router();
const session = require("express-session");

// Sample route to render template
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
router.get("/", (req, res) => {
  const username = req.session.username;
  let loggedin;
  username != null ? (loggedin = true) : (loggedin = false);

  console.log(`
  Session Username: 
  ${username}
  loggedin: ${loggedin}`);

  res.render("main", {
    logged: loggedin,
    items: [
      {
        name: "blog",
      },
    ],
  });
});

module.exports = router;
