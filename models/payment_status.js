'use strict';
module.exports = function(sequelize, DataTypes) {
  var payment_status = sequelize.define('payment_status', {
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return payment_status;
};