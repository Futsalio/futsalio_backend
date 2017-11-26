'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      email: 'root@futsalio',
      username: 'root',
      password: bcrypt.hashSync('futsalio', salt),
      phone_number: '082231231231',
      full_name: 'tirta',
      point: 2120,
      id_role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'admin@futsalio',
      username: 'admin',
      password: bcrypt.hashSync('futsalio', salt),
      phone_number: '082231231232',
      full_name: 'randy',
      point: 2220,
      id_role: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'owner@futsalio',
      username: 'owner',
      password: bcrypt.hashSync('futsalio', salt),
      phone_number: '082231231233',
      full_name: 'erwin',
      point: 5120,
      id_role: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'admin_futsal@futsalio',
      username: 'admin_futsal',
      password: bcrypt.hashSync('futsalio', salt),
      phone_number: '082231231234',
      full_name: 'gita',
      point: 3110,
      id_role: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'pengguna@futsalio',
      username: 'pengguna',
      password: bcrypt.hashSync('futsalio', salt),
      phone_number: '082231231235',
      full_name: 'pengguna',
      point: 880,
      id_role: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
