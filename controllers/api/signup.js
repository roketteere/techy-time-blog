const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user.get({ plain: true }));
    req.session.save(() => {
      req.session.username = user.username;
      req.session.logged_in = true;
      res.status(200).redirect("/dashboard");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

/**
 * Injection test code
 */

// const url = "/api/signup";
// const data = {
//   username: "testtest",
//   email: "test@test.com",
//   password: "pass12345",
//   cpassword: "pass12344",
// };

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     // Handle the response from the server
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     // Handle any errors that occurred during the request
//   });

module.exports = router;
