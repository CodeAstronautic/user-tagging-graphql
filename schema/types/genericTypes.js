const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql


exports.ResponseType = new GraphQLObjectType({
  name: 'ResponseType',
  fields: () => ({
    message: { type: GraphQLString },
    code: { type: GraphQLInt }
  })
})
