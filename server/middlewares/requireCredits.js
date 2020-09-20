module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.staus(403).send({ error: 'Not enough credits!' });
  }

  next();
};
