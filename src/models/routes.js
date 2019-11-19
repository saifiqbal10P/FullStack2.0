"use strict";

module.exports = (sequelize, DataTypes) => {
  const routes = sequelize.define(
    "routes",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      routes:{
          type:DataTypes.JSONB,
          allowNull:true
      },
      vehicleDetail_id:{
        type:DataTypes.INTEGER(10),
        allowNull:false
      }
    },
    {
      timestamps: false
    }
  );
  return routes;
};
