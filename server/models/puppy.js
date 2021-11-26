"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {}
  Puppy.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
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
    },
    {
      sequelize,
      modelName: "Puppy",
      freezeTableName: true,
    }
  );
  return Puppy;
};
