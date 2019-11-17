"use strict";

module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define(
    "bookings",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return bookings;
};
