"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KakaoSocial extends Model {}
  KakaoSocial.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      thumbImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "KakaoSocial",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return KakaoSocial;
};
