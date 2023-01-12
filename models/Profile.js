const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  name: {
    type: String,
  },
  sports: {
    type: [String],
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  description: {
    type: String,
  },
  team: {
    type: String,
  },
  location: {
    type: String,
  },
  interests: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
