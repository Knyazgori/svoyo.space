require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const {
  Event
} = require('../db/models')
const {
  Visitor
} = require('../db/models');
const {
  EventVisitor
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        title,
        description,
        date
      } = req.body

      const new_event = await Event.create({
        title,
        description,
        date
      })

      res.json({
        eventCreated: true
      });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })

router.route('/:id')
  .get(async (req, res) => {
    try {
      const {
        id
      } = req.params

      const event = await Event.findOne({
        where: {
          id: Number(id)
        },
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
      const {
        name,
        surname,
        patronymic,
        birth,
        event,
        phone,
        email
      } = req.body

      const transporter = nodemailer.createTransport({
        service: "gmail", 
        auth: {
          user: process.env.EMAIL, // заменить на нужные значения
          pass: process.env.PASSWORD
        }
      })

      const mailOptions = {
        from: 'svoyo.spacee@gmail.com', // заменить на нужные значения
        to: email,
        subject: 'Hi',  // заголовок письма 
        text: 'this is test message',
        attachments: [{
          filename: 'passport.svg',
          path: __dirname + '/../../client/public/passport/passport.svg'
        }],
      }

      transporter.sendMail(mailOptions);

      const new_visitor = await Visitor.create({
        name,
        surname,
        patronymic,
        birth,
        event,
        phone,
        email
      })
      
      const new_event_visitor = await EventVisitor.create({
        event: 1,
        visitor: new_visitor.id
      })

      res.json({
        userAdded: true
      });
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
  })


module.exports = router;
