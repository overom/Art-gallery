'use strict';
module.exports = (sequelize, DataTypes) => {
  const Oeuvre = sequelize.define('Oeuvre', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    state: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    picture: DataTypes.STRING,
    size: DataTypes.INTEGER,
    materials: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  Oeuvre.associate = function(models) {
    // associations can be defined here
  };
  return Oeuvre;
};