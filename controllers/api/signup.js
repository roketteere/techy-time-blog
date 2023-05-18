const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const { username, email, password, cpassword } = req.body;

  password === cpassword
    ? (req.body.password = bcrypt.hashSync(req.body.password, 3)) &&
      res.status(200).json({ success: "Signed Up!" })
    : res
        .status(400)
        .json({ error: "Passwords Do Not Match! Nice Try! =) 💉" });
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
