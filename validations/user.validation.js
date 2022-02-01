const Joi = require("joi");

function validateUser(user) {
  const Schema = Joi.object().keys({
    email: Joi.string().email().max(50).required(),
    firstName: Joi.string().max(30).required(),
    lastName: Joi.string().max(30).required(),
    userType: Joi.string().valid("employee", "contractor").required(),
    tags: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).optional(),
    password: Joi.string().min(7).required(),
    role: Joi.when('userType', {
      is: 'employee',
      then: Joi.string().required()
    }),
    duration: Joi.when('userType', {
      is: 'contractor',
      then: Joi.string().required()
    }),
  });
  return Schema.validate(user);
}

function validateLogin(user) {
  const Schema = Joi.object().keys({
    email: Joi.string().email().max(50).required(),
    password: Joi.string().min(7).required(),
  });
  return Schema.validate(user);
}

function validateEditProfile(user) {
  const Schema = Joi.object().keys({
    firstName: Joi.string().max(30).optional(),
    lastName: Joi.string().max(30).optional(),
    tags: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).optional(),
  });
  return Schema.validate(user);
}

function validateUserId(tagId) {
  const Schema = Joi.object().keys({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  });
  return Schema.validate(tagId);
}

function validateAdminVerification(verificationObject) {

  const Schema = Joi.object().keys({
    email: Joi.string().email().max(50).required(),
    verificationCode: Joi.string().min(5).max(10).required(),
  });
  return Schema.validate(verificationObject);

}


module.exports = {
  validateUser,
  validateLogin,
  validateEditProfile,
  validateUserId,
  validateAdminVerification
};
