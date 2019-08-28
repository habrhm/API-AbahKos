'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'kosts',
      'roomType',
     Sequelize.TEXT
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'kosts',
      'roomType',
     Sequelize.TEXT
    );
  }
};
