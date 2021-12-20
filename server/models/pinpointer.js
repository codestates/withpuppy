"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pinpointer extends Model {}
  Pinpointer.init(
    {
      location: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.FLOAT(25),
      },
      lng: {
        type: DataTypes.FLOAT(25),
      },
      iconType: {
        type: DataTypes.STRING,
      },
      expire: {
        type: DataTypes.STRING,
        defaultValue: Date.now(),
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
