const { validateUser, validateLogin, validateAdminVerification } = require("../validations/user.validation");
const AuthService = require("../services/auth.service");
const authInstance = new AuthService();


/**
 * Sign Up User
 * @param {Object} userObject
 * @returns {Object} createdUser
 */
exports.signUp = async (userObject) => {
  try {

    const { error } = validateUser(userObject);
    if (error) throw new Error(error.details[0].message);

    const createdUser = await authInstance.signUp(userObject)
    return createdUser;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Sign Up Admin
 * @param {Object} adminObject
 * @returns {Object} createdAdmin
 */
exports.adminSignUp = async (adminObject) => {
  try {

    const { error } = validateUser(adminObject);
    if (error) throw new Error(error.details[0].message);

    const createdAdmin = await authInstance.adminSignUp(adminObject)
    return createdAdmin;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Sign In
 * @param {Object} userObject
 * @returns {Object} { user, token } 
 */
exports.signIn = async (userObject) => {
  try {

    const { error } = validateLogin(userObject);
    if (error) throw new Error(error.details[0].message);

    const { user, token } = await authInstance.signIn(userObject)

    return { user, token };

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}

/**
 * Verify Admin Account
 * @param {Object} verificationObject
 * @returns {Object} updatedAdmin
 */
exports.verifyAdmin = async (verificationObject) => {
  try {

    const { error } = validateAdminVerification(verificationObject);
    if (error) throw new Error(error.details[0].message);

    const updatedAdmin = await authInstance.verifyAdmin(verificationObject)

    return updatedAdmin;

  } catch (error) {
    throw new Error(error.msg || error.message);
  }
}