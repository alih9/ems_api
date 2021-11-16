'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      HireDate: {
        type: Sequelize.DATE
      },
      Salary: {
        type: Sequelize.INTEGER
      },
      Commission: {
        type: Sequelize.INTEGER
      },
      ManagerId: {
        type: Sequelize.INTEGER
      },
      DepId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Departments",
          key: "id",
        }
      },
      JobId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Jobs",
          key: "id",
        }
            },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};