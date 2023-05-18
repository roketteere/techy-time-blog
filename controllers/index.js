const router = require("express").Router();
const home = require("./home");
const dashboard = require("./dashboard");
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const api = require("./api");

router.use("/", home);
router.use("/dashboard", dashboard);
router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/api", api);
router.use("*", home);

module.exports = router;
