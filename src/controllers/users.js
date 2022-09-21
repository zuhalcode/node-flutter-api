const admin = require("firebase-admin");

exports.createUser = async (req, res, next) => {
  const userResponse = await admin.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false,
  });

  res.json(userResponse);
  next();
};
