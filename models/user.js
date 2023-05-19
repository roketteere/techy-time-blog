const { Model, DataTypes } = require("sequelize");
const db = require("../config/connection");

class User extends Model {}

User.init(
  {
    validate(password) {
      return bcrypt.compareSync(password, this.password);
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "Password must only contain letters and numbers",
        },
      },
    },
    blogs: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogs",
        key: "count",
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
      beforeUpdate: async (updatedUser) => {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        return updatedUser;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);
