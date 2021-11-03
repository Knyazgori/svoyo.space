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
    static associate({ Event, EventVisitor }) {
      // define association here
      Visitor.belongsToMany(Event, {
        through: EventVisitor,
        foreignKey: "visitor",
        otherKey: "event"
      })
    }
  };
  Visitor.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    patronymic: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    birth: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
};
