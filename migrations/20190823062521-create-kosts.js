'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      region: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      roomNumber: {
        type: Sequelize.INTEGER
      },
      roomWidth: {
        type: Sequelize.INTEGER
      },
      roomLength: {
        type: Sequelize.INTEGER
      },
      facilities: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kosts');
  }
};