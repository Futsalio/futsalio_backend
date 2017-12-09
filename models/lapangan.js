'use strict';
module.exports = function(sequelize, DataTypes) {
  var lapangan = sequelize.define('lapangan', {
    id_tempat_futsal: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    material: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return lapangan;
};