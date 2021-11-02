'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventVisitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
    }
  };
  EventVisitor.init({
    event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Event',
        key: 'id'
      }
    },
    visitor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Visitor',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'EventVisitor',
  });
  return EventVisitor;
};
