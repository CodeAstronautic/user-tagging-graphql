const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList } = graphql
const { TagType } = require("./tag.type");

const UserType = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    tags: { type: GraphQLList(TagType) },
    userType: { type: GraphQLString },
    role: { type: GraphQLString },
    duration: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean }
  })
})


exports.AuthUserType = new GraphQLObjectType({
  name: 'AuthUser',
  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

exports.UserType = UserType;