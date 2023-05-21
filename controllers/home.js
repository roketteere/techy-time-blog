const router = require("express").Router();
const session = require("express-session");
const { User } = require("../models");
const { Blog } = require("../models");

// Sample route to render template
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
router.get("/", (req, res) => {
  try {
    const username = req.session.username;
    let loggedin;
    username != null ? (loggedin = true) : (loggedin = false);
    let users;
    let blogs;
    let userCount = 0;
    let postCount = 0;
    const blogData = Blog.findAll({}).then((data) => {
      data = data.map((blog) => blog.get({ plain: true }));
      blogs = data;
      postCount = data.length;
      console.log("BLOGS LOADED!!!\n", blogs);
    });

    const userData = User.findAll({}).then((data) => {
      data = data.map((user) => user.get({ plain: true }));
      users = data;
      userCount = data.length;
      // postCount = data.reduce((acc, user) => {});
      console.log(data);
      res.render("main", {
        display: {
          message: `User Count: ${userCount} Post Count: ${postCount}`,
        },
        logged: loggedin,
        blogs: blogs,
        items: [
          {
            name: "blog",
          },
        ],
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // console.log(`
  // Session Username:
  // ${username}
  // loggedin: ${loggedin}`);
});

module.exports = router;
