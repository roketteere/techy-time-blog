const express = require("express");
const { db } = require("./config"); // import sequelize connection obj as db
const handlebars = require("express-handlebars");

// create app and port
const app = express();
const PORT = process.env.PORT || 3001;

// set handlebar configuration
app.engine("hbs", handlebars);

app.set("view engine", "handlebars");

// import middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route to render template
app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", { layout: "index" });
});

// connect to db before server then start server inside
db.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now Listening On"));
});
