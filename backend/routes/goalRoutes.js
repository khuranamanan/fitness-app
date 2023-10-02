const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router.get("/goals", goalController.getAllGoals);

router.post("/goals", goalController.addGoal);

router.put("/goals/:goalId", goalController.editGoal);

router.delete("/goals/:goalId", goalController.deleteGoal);

module.exports = router;
