'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'Message',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.STRING,
      sujet: DataTypes.STRING,
      date: DataTypes.STRING,
      state: DataTypes.BOOLEAN,
    },
    {}
  );
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
