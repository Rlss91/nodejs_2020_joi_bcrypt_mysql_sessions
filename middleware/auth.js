const e = require("express");

module.exports = (req, res, next) => {
  if (req.session.idclients) {
    next();
  } else {
    res.redirect("/");
  }
};
