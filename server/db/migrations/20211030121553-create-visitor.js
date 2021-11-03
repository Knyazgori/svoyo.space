'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Visitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      surname: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      patronymic: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      birth: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      event: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('Visitors');
  }
};
