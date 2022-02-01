const Tag = require('../models/tag.models');


class TagService {

  /**
   * Create a tag
  * @param {Object} tag
  * @returns {Object} createdTag
  */
  createTag(tag) {
    return new Promise(async (resolve, reject) => {
      try {

        let existingTag = await Tag.findOne({ name: tag.name });
        if (existingTag) return reject({ code: 400, msg: 'Tag already exists.' })

        const createdTag = await Tag.create(tag);
        if (!createdTag) return reject({ code: 500, msg: 'Error occurred, tag was not created.' })

        resolve(createdTag);
      } catch (error) {
        error.source = 'Create tag service'
        return reject(error);
      }
    })
  }


  /**
  * Edit tag
  * @param {String} tagId 
  * @param {Object} tagUpdate
  * @returns {Object} deletedTag
  */
  editTag(tagId, tagUpdate) {

    return new Promise(async (resolve, reject) => {
      try {
        let validTag = await Tag.findById(tagId);
        if (!validTag) return reject({ code: 404, msg: 'Tag not found' })

        await validTag.updateOne(tagUpdate)
        const updatedTag = await this.getTags({ _id: tagId })
        resolve(updatedTag[0]);

      } catch (error) {
        error.source = 'Edit tag Service'
        return reject(error);
      }
    })
  }

  /**
   * Get all tags
   * @returns  {Object} allTags
  */
  getTags(filter = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const tags = await Tag.find(filter);

        if (tags.length < 1) return reject({ code: 404, msg: 'Tags not found' })

        resolve(tags);

      } catch (error) {
        error.source = 'Get all tags service'
        return reject(error);
      }
    })
  }


  /**
  * Delete tag
  * @param {String} tagId 
  * @returns {Object} deletedTag
  */
  deleteTag(tagId) {
    return new Promise(async (resolve, reject) => {
      try {

        const activeTag = await Tag.findById(tagId);
        if (!activeTag) return reject({ code: 404, msg: 'Tag not found or already deleted' })

        const deletedTag = await activeTag.delete();

        resolve(deletedTag);

      } catch (error) {
        error.source = 'Delete tag service'
        return reject(error);

      }
    })
  }

}



module.exports = TagService