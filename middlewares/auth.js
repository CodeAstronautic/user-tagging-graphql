const jwt = require('jsonwebtoken');
const appConfig = require('../config/config.json');
const { MSG_TYPES } = require("../constants/msgTypes");


const GraphQLAuth = async (req, res, next) => {

  const token = req.header("x-auth-token");
  if (!token) {
    req.user = null;
    req.authErrorMsg = MSG_TYPES.ACCESS_DENIED
    return next();
  }
  try {
    const decoded = jwt.verify(token, appConfig.application.jwt.key,);

    if (!decoded) {
      req.user = null;
      req.authErrorMsg = MSG_TYPES.PERMISSION
      return next();
    }
    req.user = decoded
    req.authErrorMsg = null
    next();
  } catch (ex) {
    if (ex.name === "TokenExpiredError") {
      req.user = null;
      req.authErrorMsg = MSG_TYPES.EXPIRED_TOKEN
      return next();
    }
    req.user = null;
    req.authErrorMsg = MSG_TYPES.ACCESS_DENIED
    return next();
  }
};


module.exports = {
  GraphQLAuth
};