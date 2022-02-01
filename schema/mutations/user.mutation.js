const graphql = require('graphql');
const { GraphQLString, GraphQLID, GraphQLList } = graphql
const { UserType } = require("../types/user.type")
const { ResponseType } = require('../types/genericTypes');
const { editUser, deleteUser } = require('../../controllers/user.controller');


exports.editUser = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
  },
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    return editUser(user, args)
  }
}

exports.deleteUser = {
  type: ResponseType,
  args: {
    userId: { type: GraphQLID },
  },
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    if (args.userId !== user.userId && !user.isAdmin) throw new Error("UNAUTHORIZED")
    return deleteUser(args)
  }
}