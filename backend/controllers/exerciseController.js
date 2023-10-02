const Exercise = require("../models/Exercise");

async function getExercises(req, res) {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addExercise(req, res) {
  try {
    const newExercise = new Exercise(req.body);
    await newExercise.save();

    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    console.log("Error Adding Exercise", err)
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteExercise(req, res) {
  const { exerciseId } = req.params;
  try {
    await Exercise.findByIdAndRemove(exerciseId);

    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getExercises,
  addExercise,
  deleteExercise,
};
