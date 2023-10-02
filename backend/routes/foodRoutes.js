const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

router.get("/food", foodController.getAllFoodItems);

router.post("/food", foodController.addFoodItem);

router.delete("/food/:foodId", foodController.deleteFoodItem);

module.exports = router;
