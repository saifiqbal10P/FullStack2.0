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
  vehicle.associate = function(models) {
    vehicle.belongsTo(models.vehicledetail, {
      through: models.vehicledetail,
      foreignKey: "vehicle_id",
      as: "vechile_VehicleDetail"
    });
  };
  return vehicle;
};
