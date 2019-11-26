"use strict";

module.exports = (sequelize, DataTypes) => {
  const vehicledetails = sequelize.define(
    "vehicledetails",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      seatingCapacity: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      availableSeats: {
        type: DataTypes.INTEGER(10),
        allowNull: true
      },
      vehicle_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  vehicledetails.associate = function(models) {
    vehicledetails.belongsToMany(models.routes, {
      through: models.routes,
      foreignKey: "vehicleDetail_id",
      as: "VehicleDetail_Routes"
    });
  };

  return vehicledetails;
};
