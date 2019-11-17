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
      }),

      queryInterface.createTable("bookings", {
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
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable("users"),
      queryInterface.dropTable("bookings"),
      queryInterface.dropTable("vehicle")
    ]);
  }
};
