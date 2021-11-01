'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event }) {
      // define association here
      Visitor.belongsToMany(Event, {
        through: "EventVisitors",
        otherKey: "event",
        foreignKey: "visitor"
      })
    }
  };
  Visitor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patronymic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
};
