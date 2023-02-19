const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get json web token from header
  const token = req.header("x-auth-token");

  if (!token) {
    // If no token is present, return a 401 Unauthorized status with an error message
    return res
      .status(401)
      .json({ msg: "No token, authorisation has been denied." });
  }

  try {
    // Verify token using the secret key "secretWebToken"
    const decoded = jwt.verify(token, "secretWebToken");

    // Set the decoded user information as a property of the req object
    req.user = decoded.user;
    // Call the next middleware function to continue processing the request
    next();
  } catch (err) {
    // If the token cannot be verified, return a 401 Unauthorized status with an error message
    res.status(401).json({ msg: "Token is not valid." });
  }
};
