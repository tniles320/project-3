const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Email is required",
  },
  zipCode: {
    type: String,
    trim: true,
    required: "Zip code is required",
  },
  rating: [
    {
      type: Number,
      trim: true,
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
