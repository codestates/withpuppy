"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pinpointer extends Model {}
  Pinpointer.init(
    {
      location: {
        type: DataTypes.INTEGER,
      },
      lat: {
        type: DataTypes.INTEGER,
      },
      lng: {
        type: DataTypes.INTEGER,
      },
      iconType: {
        type: DataTypes.STRING,
      },
      expire: {
        type: DataTypes.STRING,
        defaultValue: Date.now(),
      },
      puppyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Pinpointer",
      freezeTableName: true,
    }
  );
  return Pinpointer;
};
