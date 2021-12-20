"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//! Relation
const { User, Puppy, Message, Pinpointer } = db;

//@ 1:1
User.hasOne(Puppy, { onDelete: "CASCADE" });
Puppy.hasOne(Pinpointer);

//# 1:N
User.hasMany(Message, { onDelete: "CASCADE" });
Message.belongsTo(User);
User.hasMany(Pinpointer, { onDelete: "CASCADE" });
Pinpointer.hasMany(Message, { onDelete: "CASCADE" });
Message.belongsTo(Pinpointer);

//% N:M
User.belongsToMany(User, { as: "follower", through: "user_follower" });

module.exports = db;
