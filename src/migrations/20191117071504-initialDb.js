"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.createTable("users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }).then(function(){

       return queryInterface.createTable("bookings", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: "users",
              key: "id"
            },
            allowNull: false
          },
          status: {
            type: Sequelize.STRING,
            allowNull: false
          },
          state: {
            type: Sequelize.STRING,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        })
      }),
      queryInterface.createTable("vehicle", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        numberPlate: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }).then(function(){

        return queryInterface.createTable("vehicledetail", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          seatingCapacity: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          availableSeats: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          vehicle_id: {
            type: Sequelize.INTEGER,
            references: {
              model: "vehicle",
              key: "id"
            },
            allowNull: false
          },
        }).then(function() {

          return queryInterface.createTable("routes", {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            routes: {
              type: Sequelize.JSONB,
              allowNull: false
            },
            vehicledetail_id: {
              type: Sequelize.INTEGER,
              references: {
                model: "vehicledetail",
                key: "id"
              },
              allowNull: false
            },
          })
        })
      }),
     
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable("users"),
      queryInterface.dropTable("bookings"),
      queryInterface.dropTable("vehicle"),
      queryInterface.dropTable("vehicledetail"),
      queryInterface.dropTable("routes")
    ]);
  }
};
