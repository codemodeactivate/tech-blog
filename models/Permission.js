const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Permission extends Model {}

Permission.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        permission_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'permission'
    }
);

module.exports = Permission;
