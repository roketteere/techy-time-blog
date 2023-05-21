const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create({
      username: req.session.username,
      title: req.body.title,
      content: req.body.content,
    });
    // console.log(blog.get({ plain: true }));
    res.status(200).redirect("/");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
