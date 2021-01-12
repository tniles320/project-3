const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {
    type: String,
    trim: true,
    required: "User is required",
  },
  post: {
    type: String,
    trim: true,
    required: "Post is required",
  },
  body: {
    type: String,
    trim: true,
    required: "Message cannot be blank",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
