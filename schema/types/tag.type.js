const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql

const { getTagUsers } = require('../../controllers/user.controller');


const { UserType } = require("./user.type")

exports.TagsType = new GraphQLObjectType({
  name: 'Tags',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
    users: {
      type: GraphQLList(UserType), resolve(parent, args) {
        return getTagUsers(parent._id);
      }
    }
  })
})


exports.TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
  })
})