const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  // Get token from Header
  const token = req.header("x-auth-token");

  //Check if there a token

  //NO TOKEN
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  //Token is avail
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
