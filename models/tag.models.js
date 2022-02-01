const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: {
    type: String,
    index: true,
    required: true,
    maxlength: 30,
  },
  details: {
    type: String,
    index: true,
    required: true,
    maxlength: 75,
  }
}, {
  timestamps: true,
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;