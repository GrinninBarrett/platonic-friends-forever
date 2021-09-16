const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserTag extends Model {}

User.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usertag',
  }
);

module.exports = UserTag;