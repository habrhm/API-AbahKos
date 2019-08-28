'use strict';
module.exports = (sequelize, DataTypes) => {
  const kosts = sequelize.define('kosts', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    images: DataTypes.TEXT,
    description: DataTypes.TEXT,
    roomNumber: DataTypes.INTEGER,
    roomWidth: DataTypes.INTEGER,
    roomLength: DataTypes.INTEGER,
    facilities: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  kosts.associate = function(models) {
    kosts.belongsTo(models.user),
    kosts.hasMany(models.Booking)
  };
  return kosts;
};