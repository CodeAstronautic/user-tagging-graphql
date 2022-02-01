const Joi = require("joi");


function validateTag(tagObject) {
  const Schema = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).optional(),
    name: Joi.string().max(20).required(),
    details: Joi.string().max(75).required(),
  });

  return Schema.validate(tagObject);
}

function validateTagId(tagId) {
  const Schema = Joi.object().keys({
    tagId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  });
  return Schema.validate(tagId);
}

module.exports = {
  validateTag,
  validateTagId
};
