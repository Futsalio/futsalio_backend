'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      id_offline_customer: {
        type: Sequelize.INTEGER
      },
      id_lapangan: {
        type: Sequelize.INTEGER
      },
      id_price: {
        type: Sequelize.INTEGER
      },
      id_payment_status: {
        type: Sequelize.INTEGER
      },
      unique_code: {
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.STRING
      },
      playing_date: {
        type: Sequelize.STRING
      },
      playing_time: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      is_expired: {
        type: Sequelize.INTEGER
      },
      need_opponent: {
        type: Sequelize.STRING
      },
      teams_age_range: {
        type: Sequelize.STRING
      },
      opponent_age_range: {
        type: Sequelize.STRING
      },
      additional_player: {
        type: Sequelize.INTEGER
      },
      deposit: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('orders');
  }
};