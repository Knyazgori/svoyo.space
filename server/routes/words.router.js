const express = require('express');
const router = express.Router();

const { Words } = require('../db/models')

router.route('/')
.post( async (req, res) => {
  try {

    const { first, second, third, user, nickname, city, country } = req.body
    const new_words = await Words.create({first, second, third, user, nickname, city, country })
    
    res.json({ realized : true });
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
})

module.exports = router;
