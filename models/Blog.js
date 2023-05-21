const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "username",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
