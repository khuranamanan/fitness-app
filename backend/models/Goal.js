const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  goalName: {
    type: String,
    required: true,
  },
  goalDescription: {
    type: String,
  },
  targetDate: {
    type: Date,
  },
  targetCaloriesValue: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["In Progress", "Achieved", "Abandoned"],
    default: "In Progress",
  },
});

module.exports = mongoose.model("Goal", goalSchema);
