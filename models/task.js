const mongoose = require("mongoose");
const TaskScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: [20, "it should be maximum of 20 characters"],
  },
  completed: {
    default: false,
    type: Boolean,
  },
});

module.exports = mongoose.model("Task", TaskScheme);
