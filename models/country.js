'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.Office)
    }
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ISO: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'country',
    }
  )
  return Country
}
