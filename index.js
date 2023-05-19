const express = require("express");
const routes = require("./controllers");
const path = require("path");
const { db } = require("./config"); // import sequelize connection obj as db
const exphbs = require("express-handlebars");
const session = require("express-session");
SequelizeStore = require("connect-session-sequelize")(session.Store);

// create app and port
const app = express();
const PORT = process.env.PORT || 3001;

// Engine configuration
// Set up the Handlebars engine
app.engine(
  "hbs",
  exphbs.engine({
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
app.use(
  session({
    secret: "hello world",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 1 },
    store: new SequelizeStore({ db: db }),
  })
);
app.use(routes);

// connect to db before server then start server inside
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
});
