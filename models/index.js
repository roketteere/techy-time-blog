const express = require("express");
const handlebars = require("express-handlebars");

const app = express();



// Set up the views
app.set("views", __dirname + "/views");

// Set up the routes
app.get("/", (req, res) => {
  // Render the index view
  res.render("index", {
    items: [
      {
        name: "Item 1",
      },
      {
        name: "Item 2",
      },
    ],
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
