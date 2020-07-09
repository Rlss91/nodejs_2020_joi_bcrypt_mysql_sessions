const index = (req, res) => {
  let errArray = req.session.err ? req.session.err : [];
  req.session.err = undefined;
  res.render("index", { title: "Express", errArray: errArray });
};
const land = (req, res) => {
  res.render("land");
};

module.exports.index = index;
module.exports.land = land;
