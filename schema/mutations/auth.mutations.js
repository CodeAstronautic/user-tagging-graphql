const graphql = require('graphql');
const { GraphQLString, GraphQLBoolean } = graphql
const { UserType, AuthUserType } = require("../types/user.type")
const { signUp, adminSignUp, signIn, verifyAdmin } = require('../../controllers/auth.controller');

exports.signUp = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    tag: { type: GraphQLString },
    userType: { type: GraphQLString },
    role: { type: GraphQLString },
    duration: { type: GraphQLString },
  },
  resolve(parent, args) {
    return signUp(args)
  }
}

exports.adminSignUp = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    tag: { type: GraphQLString },
    userType: { type: GraphQLString },
    role: { type: GraphQLString },
    duration: { type: GraphQLString },
  },
  resolve(parent, args) {
    return adminSignUp(args)
  }
}

exports.signIn = {
  type: AuthUserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parent, args) {
    return signIn(args)
  }
}

exports.verifyAdmin = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    verificationCode: { type: GraphQLString }
  },
  resolve(parent, args) {
    return verifyAdmin(args)
  }
}