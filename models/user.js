'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    full_name: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.hasMany(Roles, { through: id_role})
        // const User = this.sequelize.define('user', {/* attributes */})
        // const UserRole  = this.sequelize.define('userRole', {/* attributes */});
        
        User.belongsTo(Role, {foreignKey: 'id_role'}); // Adds roleId to user rather than userRoleId
      }
    }
  });
  return User;
};