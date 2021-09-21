const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    bio: {
      type: DataTypes.STRING,
      defaultValue: 'N/A'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  },
  {
    hooks: {
      beforeBulkCreate: async (newUserData) => {
        newUserData = await Promise.all(newUserData.map(async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
          return user;
        }));
        return newUserData;
      },
      beforeCreate: async (newUserData) => {
        console.log(newUserData);
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;