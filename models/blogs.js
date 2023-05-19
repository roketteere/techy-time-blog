const { Model, DataTypes } = require("sequelize");
const db = require("../config/connection");

class Blog extends Model {}
Blog.init(
  {
    username: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "username",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    db,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);
