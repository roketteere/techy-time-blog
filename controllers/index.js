const router = require("express").Router();
const home = require("./home");
const dashboard = require("./dashboard");
const posting = require("./posting");
const postedit = require("./postedit");
const postview = require("./postview");
const login = require("./login");
const logout = require("./logout");
const signup = require("./signup");
const signlog = require("./signlog");
const api = require("./api");

router.use("/", home);
router.use("/dashboard", dashboard);
router.use("/posting", posting);
router.use("/postedit", postedit);
router.use("/postview", postview);
router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/signlog", signlog);
router.use("/api", api);
router.use("*", home);

module.exports = router;
