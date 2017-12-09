'use strict';
module.exports = function(sequelize, DataTypes) {
  var offline_customer = sequelize.define('offline_customer', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return offline_customer;
};