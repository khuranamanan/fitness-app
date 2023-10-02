const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");

router.get("/exercises", exerciseController.getExercises);

router.post("/exercises", exerciseController.addExercise);

router.delete("/exercises/:exerciseId", exerciseController.deleteExercise);

module.exports = router;
