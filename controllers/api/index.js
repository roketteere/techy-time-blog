const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const create = require("./create");


router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/create", create);

module.exports = router;
