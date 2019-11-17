"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
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
  user.associate = function(models) {
    user.belongsToMany(models.bookings, {
      through: models.bookings,
      foreignKey: "userId",
      as: "user_bookings"
    });
  };
  return user;
};
