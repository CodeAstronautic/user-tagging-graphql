const graphql = require('graphql');
const { GraphQLID, GraphQLList } = graphql

const { TagType } = require("../types/tag.type")

const { getTag, getTags } = require('../../controllers/tag.controller');

exports.tag = {
  type: TagType,
  args: {
    tagId: { type: GraphQLID }
  },
  resolve(parent, args) {
    return getTag(args);
  }
}

exports.tags = {
  type: GraphQLList(TagType),
  resolve(parent, args) {
    return getTags();
  }
}