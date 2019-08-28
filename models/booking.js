'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    kostId: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.user),
    Booking.belongsTo(models.kosts)
  };
  return Booking;
};