'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    fullname: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.kosts)
    user.hasMany(models.Booking)
  };
  return user;
};