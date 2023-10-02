const Food = require("../models/Food");

const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addFoodItem = async (req, res) => {
  try {
    const { foodName, calories, protein, carbohydrates, fat } = req.body;
    const newFoodItem = new Food({
      foodName,
      calories,
      protein,
      carbohydrates,
      fat,
    });
    const savedFoodItem = await newFoodItem.save();
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteFoodItem = async (req, res) => {
  try {
    const foodItemId = req.params.foodId;
    const deletedFoodItem = await Food.findByIdAndDelete(foodItemId);
    if (!deletedFoodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { deleteFoodItem, addFoodItem, getAllFoodItems };
