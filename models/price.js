'use strict';
module.exports = function(sequelize, DataTypes) {
  var price = sequelize.define('price', {
    id_lapangan: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return price;
};