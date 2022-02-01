const MSG_TYPES = Object.freeze({
  ACCOUNT_CREATED: "Account Successfully Created.",
  LOGGED_IN: "Successfully logged in",
  DELETED: "Resource Deleted Successfully",
  UPDATED: "Resource Updated Successfully",
  CREATED: "Resource Created Successfully",
  FETCHED: "Resource Fetched Successfully",
  ACCOUNT_VERIFIED: "Account Successfully Verified",
  ACCOUNT_EXIST: "Account already exist.",
  EMAIL_USED: "E-mail has been user.",
  ACCOUNT_INVALID: "Invalid email or password",
  NOT_FOUND: "Resource Not Found",
  NOT_VERIFIED: "Account Not Verified",
  ACCESS_DENIED: "Access denied.",
  PERMISSION: "You don't have enough permission to perform this action",
  SERVER_ERROR: "Server Error!",
  ACCOUNT_DELETED: "Account no longer exists!",
  INVALID_PASSWORD: "Invalid Password",
  EXPIRED_TOKEN: "Token has expired, login agin",
});

const ACCOUNT_TYPES = Object.freeze({
  ADMIN: "admin",
  USER: "user",
});

module.exports = {
  MSG_TYPES,
  ACCOUNT_TYPES
};
