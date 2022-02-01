const graphql = require('graphql');
const { GraphQLString, GraphQLID } = graphql
const { TagType } = require("../types/tag.type")
const { ResponseType } = require('../types/genericTypes');
const { createTag, editTag, deleteTag } = require('../../controllers/tag.controller');

exports.addTag = {
  type: TagType,
  args: {
    name: { type: GraphQLString },
    details: { type: GraphQLString }
  },
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    if (!user.isAdmin) throw new Error("NOT ADMIN")
    return createTag(args)
  }
}


exports.editTag = {
  type: TagType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString }
  },
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    if (!user.isAdmin) throw new Error("UNAUTHORIZED")
    return editTag(args)
  }
}

exports.deleteTag = {
  type: ResponseType,
  args: {
    tagId: { type: GraphQLID },
  },
  resolve(parent, args, { user, authErrorMsg }) {
    if (user == null) throw new Error(authErrorMsg)
    if (!user.isAdmin) throw new Error("NOT ADMIN")
    return deleteTag(args)
  }
}