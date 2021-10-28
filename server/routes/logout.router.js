const express = require('express');

const router = express.Router();

router.route('/')
  .post((req, res, next) => {
    console.log(req.session.user);
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('user_sid');
      res.json({ isUserAuth: false });
    });
  });

module.exports = router;
