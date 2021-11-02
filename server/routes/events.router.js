const express = require('express');
const router = express.Router();

const { Event } = require('../db/models')
const { Visitor } = require('../db/models');
const { EventVisitor } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const { title, description, date } = req.body

      const new_event = await Event.create({ title, description, date })

      res.json({ eventCreated: true });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params

      const event = await Event.findOne({ 
        where: { id: Number(id) },
        include: [Visitor]
      })

      res.json(event);
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })

router.route('/add_visitor')
  .post(async (req, res) => {
    try {
      const { name, surname, patronymic, birth, event } = req.body

      const new_visitor = await Visitor.create({ name, surname, patronymic, birth, event })
      const new_event_visitor = await EventVisitor.create({ event: 1, visitor: new_visitor.id })

      res.json({ userAdded: true });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })


module.exports = router;
