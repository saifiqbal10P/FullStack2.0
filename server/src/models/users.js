"use strict";

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  // users.associate = function(models) {
  //   users.belongsToMany(models.bookings, {
  //     through: models.bookings,
  //     foreignKey: "user_Id",
  //     as: "user_bookings"
  //   });
  // };
  return users;
};
