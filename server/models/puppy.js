"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {}
  Puppy.init(
    {
      puppyName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      introcution: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      puppyProfile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Puppy",
      freezeTableName: true,
    }
  );
  return Puppy;
};
