"use strict";

module.exports = (sequelize, DataTypes) => {
  const vehicledetail = sequelize.define(
    "vehicle",
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
      availableSeats:{
          type:DataTypes.INTEGER(10),
          allowNull:true
      },
      vehicle_id:{
        type:DataTypes.INTEGER(10),
        allowNull:false

      }

    },
    {
      timestamps: false
    }
  );
  vehicledetail.associate = function(models) {
    vehicledetail.belongsToMany(models.routes, {
      through: models.routes,
      foreignKey: "vehicleDetail_id",
      as: "VehicleDetail_Routes"
    });
  };

  return vehicledetail;
};
