const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: "User ID is required",
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
