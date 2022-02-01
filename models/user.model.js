const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    index: true,
    required: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    index: true,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  userType: {
    type: String,
    enum: ["employee", "contractor"],
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
  tags: [{
    type: ObjectId,
    default: null,
    index: true,
    ref: "Tag"
  }],
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;