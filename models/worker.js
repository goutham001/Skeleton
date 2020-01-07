'use strict';
module.exports = (sequelize, DataTypes) => {
  const worker = sequelize.define('worker', {
    id_pk: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    day: DataTypes.INTEGER,
    salary: DataTypes.INTEGER
  }, {freezeTableName: true,
    timestamps: false,
    tableName: 'worker'});
  worker.associate = function(models) {
    // associations can be defined here
  };
  return worker;
};