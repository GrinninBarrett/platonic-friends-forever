const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserTag extends Model {}

UserTag.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
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