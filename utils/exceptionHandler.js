const LoggerService = require("./logger")

module.exports = (err) => {

  const errorMessage = err.msg || err.message || "Something went wrong";
  const statusCode = err.code || err.statusCode || 500;

  LoggerService.error(errorMessage, err)

  return { statusCode, errorMessage };
}