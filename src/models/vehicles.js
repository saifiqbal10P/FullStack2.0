"use strict";

module.exports = (sequelize, DataTypes) => {
  const vehicles = sequelize.define(
    "vehicles",
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
  vehicles.associate = function(models) {
    vehicles.belongsTo(models.vehicledetails, {
      through: models.vehicledetail,
      foreignKey: "vehicle_id",
      as: "vechile_VehicleDetail"
    });
  };
  return vehicles;
};
