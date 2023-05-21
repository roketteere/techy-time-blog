const router = require("express").Router();
const { Blog } = require("../models");

// Sample route to render template
router.get("/", async (req, res) => {
  let blogs;
  try {
    const user = { name: req.session.username };
    const blogData = await Blog.findAll({
      where: {
        username: req.session.username,
      },
    });

    blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log("BLOGS LOADED!!!\n", typeof blogs);

    res.render("dashboard", {
      dashboard: { name: "Dashboard Home" },
      logged: true,
      display: { message: "Welcome to the dashboard, " },
      user: user,
      items: [
        {
          name: "post",
        },
      ],
      blogs: blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.redirect("/signlog");
  }
});

module.exports = router;
