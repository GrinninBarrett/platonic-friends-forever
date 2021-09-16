const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserLike extends Model {}

User.init(
  {  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_liked_user_id: {
      type: DataTypes.INTEGER,      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userlike',
  }
);

module.exports = UserLike;