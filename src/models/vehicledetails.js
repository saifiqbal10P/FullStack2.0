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
      routeid:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    },
    {
      timestamps: false
    }
  );
  vehicledetails.associate = function(models) {
    vehicledetails.belongsTo(models.routes, {
      through: models.routes,
      foreignKey: "routeid",
      as: "vehicleroutes"
    });
  };

  return vehicledetails;
};
