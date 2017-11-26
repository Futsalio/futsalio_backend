'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [{
      name: 'super admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'admin futsalio',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'admin owner',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'admin futsal',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'pengguna',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
   
    return queryInterface.bulkDelete('roles', null, {});
  }
};
