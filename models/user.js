'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    active: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'users'
  });
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};