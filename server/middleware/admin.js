module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.username = req.session.user.username;
    res.locals.isAuth = true;
  }
  next();
};
