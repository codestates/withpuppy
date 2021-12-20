"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}
  Message.init(
    {
      text: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Message",
      freezeTableName: true,
    }
  );
  return Message;
};