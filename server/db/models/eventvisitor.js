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
    static associate({ Event, Visitor }) {
      // define association here
      /**
       * Event * : * Visitor
       * Event 1 : * EventVisitor * : 1 Visitor
      //  */
      // Event.hasMany(EventVisitor, {/** @todo Прописать кастомное название внешнего ключа */ })
      // Visitor.hasMany(EventVisitor, {/** @todo Прописать кастомное название внешнего ключа */ })
      // EventVisitor.belongsTo(Event, {/** @todo Прописать кастомное название внешнего ключа */ })
      // EventVisitor.belongsTo(Visitor, {/** @todo Прописать кастомное название внешнего ключа */ })
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
