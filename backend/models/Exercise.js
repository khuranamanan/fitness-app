const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
