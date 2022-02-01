const graphql = require('graphql');
const { GraphQLList } = graphql

const { UserType } = require("../types/user.type")
const { getUser, getUsers } = require('../../controllers/user.controller');

exports.user = {
  type: UserType,
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    return getUser({ userId: user.userId });
  }
}

exports.users = {
  type: GraphQLList(UserType),
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    if (!user.isAdmin) throw new Error("NOT ADMIN")
    return getUsers()
  }
}