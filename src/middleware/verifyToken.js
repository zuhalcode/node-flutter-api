const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Access Denied",
    });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(verified._id);

    req.user = user;
    next();
  } catch (e) {
    return res.status(400).json({
      status: res.statusCode,
      message: "Invalid Token",
    });
  }
};

module.exports = verifyToken;
