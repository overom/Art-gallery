'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    googleClient: DataTypes.BOOLEAN
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};