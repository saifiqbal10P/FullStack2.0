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
      },
      vehicledetail_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  vehicles.associate = function(models) {
    vehicles.belongsTo(models.vehicledetails, {
      through: models.vehicles,
      foreignKey: "vehicledetail_id",
      as: "vehicledetails"
    });
  };
  return vehicles;
};
