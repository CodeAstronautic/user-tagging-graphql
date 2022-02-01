const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql

// Queries
const { user, users } = require("./queries/users.query")
const { tag, tags } = require("./queries/tag.query")


exports.query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // User
    user,
    users,
    // Tag
    tag,
    tags
  }
})