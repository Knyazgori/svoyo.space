const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const isUserAuth = req.session.user ? true : false;
    res.json({ isUserAuth });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
