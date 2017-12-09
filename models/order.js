'use strict';
module.exports = function(sequelize, DataTypes) {
  var order = sequelize.define('order', {
    id_user: DataTypes.INTEGER,
    id_offline_customer: DataTypes.INTEGER,
    id_lapangan: DataTypes.INTEGER,
    id_price: DataTypes.INTEGER,
    id_payment_status: DataTypes.INTEGER,
    unique_code: DataTypes.INTEGER,
    order_date: DataTypes.STRING,
    playing_date: DataTypes.STRING,
    playing_time: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    is_expired: DataTypes.INTEGER,
    need_opponent: DataTypes.STRING,
    teams_age_range: DataTypes.STRING,
    opponent_age_range: DataTypes.STRING,
    additional_player: DataTypes.INTEGER,
    deposit: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return order;
};