"use strict";

module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define(
    "vehicle",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      numberPlate: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return vehicle;
};