const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // add methods here
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
                isEmail:true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[8]
            }
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'user',
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            },
        },
    }
);

module.exports = User;
