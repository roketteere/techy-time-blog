const express = require("express");
const routes = require("./controllers");
const path = require("path");
const { db } = require("./config"); // import sequelize connection obj as db
const handlebars = require("express-handlebars").engine;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { Sequelize } = require("sequelize");
SequelizeStore = require("connect-session-sequelize")(session.Store);

// create app and port
const app = express();
const PORT = process.env.PORT || 3001;

// Engine configuration
// Set up the Handlebars engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "index",
  })
);

app.set("view engine", "hbs");

// import middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  session({
    secret: "helloworld",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100000, secure: true },
    sameSite: "none",
    store: new SequelizeStore({ db: db }),
  })
);
app.use(routes);

// connect to db before server then start server inside
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
});
