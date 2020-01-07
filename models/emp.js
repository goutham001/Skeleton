'use strict';
module.exports = (sequelize, DataTypes) => {
    const emps = sequelize.define('emps', {
        id_pk: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'emps'
    });
    emps.associate = function (models) {
        // associations can be defined here
    };
    return emps;
};