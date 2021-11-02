'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Words extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Words.init({
    first: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    second: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    third: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Words',
  });
  return Words;
};
