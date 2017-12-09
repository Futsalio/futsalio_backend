'use strict';
module.exports = function(sequelize, DataTypes) {
  var tempat_futsal = sequelize.define('tempat_futsal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    web: DataTypes.STRING,
    is_active: DataTypes.STRING,
    address: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tempat_futsal;
};