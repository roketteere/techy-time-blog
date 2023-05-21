const Blog = require("./blog");
const User = require("./user");

User.hasMany(Blog, {
  foreignKey: "username",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "username",
});


module.exports = { Blog, User };
