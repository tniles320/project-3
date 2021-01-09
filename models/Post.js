const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: "User ID is required",
  },
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required",
  },
  amount: {
    type: String,
    trim: true,
    required: "Amount cannot be empty",
  },
  location: {
    type: String,
    trim: true,
    required: "location is required",
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
