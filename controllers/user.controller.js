const { validateEditProfile, validateUserId } = require("../validations/user.validation");
const { MSG_TYPES } = require("../constants/msgTypes");
const UserService = require("../services/user.service");
const userInstance = new UserService();

/**
 * Get single user
 * @param {String} userId
 * @returns {Object} user
 */
exports.getUser = async (userId) => {
  try {
    const { error } = validateUserId(userId);
    if (error) throw new Error(error.details[0].message);

    const user = await userInstance.getUsers({ _id: userId.userId, verified: true, deleted: false })
    return user[0];

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Get all users
 * @returns {Object} users
 */
exports.getUsers = async () => {
  try {
    const users = await userInstance.getUsers({ verified: true, deleted: false }, {}, 'tags')

    return users;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Get users for a tag
 * @param {String} userId
 * @returns {Object} users
 */
exports.getTagUsers = async (tagId) => {
  try {
    const users = await userInstance.getUsers({ tags: tagId, verified: true, deleted: false })
    return users;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Edit user infomation
 * @param {Object} user
 * @param {Object} editUserObject
 * @returns {Object} updatedUser
 */
exports.editUser = async (user, editUserObject) => {
  try {
    const { error } = validateEditProfile(editUserObject);
    if (error) throw new Error(error.details[0].message);

    const updatedUser = await userInstance.editUser(user, editUserObject)
    return updatedUser;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Soft delete user infomation
 * @param {String} user
 * @returns {Object} response
 */
exports.deleteUser = async (userId) => {
  try {
    const { error } = validateUserId(userId);
    if (error) throw new Error(error.details[0].message);

    await userInstance.deleteUser(userId.userId)
    return { code: 200, message: MSG_TYPES.DELETED };

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}