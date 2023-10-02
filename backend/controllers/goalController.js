const Goal = require("../models/Goal");

const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addGoal = async (req, res) => {
  try {
    const { goalName, goalDescription, targetDate, targetCaloriesValue } =
      req.body;
    const newGoal = new Goal({
      goalName,
      goalDescription,
      targetDate,
      targetCaloriesValue,
    });
    const savedGoal = await newGoal.save();
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editGoal = async (req, res) => {
  try {
    const goalId = req.params.goalId;
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
      new: true,
    });
    if (!updatedGoal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const goalId = req.params.goalId;
    const deletedGoal = await Goal.findByIdAndDelete(goalId);
    if (!deletedGoal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteGoal, editGoal, addGoal, getAllGoals };
