'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_has_order = sequelize.define('user_has_order', {
    id_user: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    request_status: DataTypes.STRING,
    number_of_player: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_has_order;
};