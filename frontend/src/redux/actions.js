import axios from "axios";
import { toast } from "react-toastify";

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const addExercise =
  (exerciseName, duration, caloriesBurned) => async (dispatch) => {
    try {
      const response = await axios.post(`${backendURL}/api/exercises`, {
        exerciseName,
        duration,
        caloriesBurned,
      });
      dispatch({ type: "SET_EXERCISES", payload: response.data });
      toast.success("Exercise added successfully!");
    } catch (error) {
      console.error(error);
      dispatch({ type: "SET_ERROR", payload: "Failed to add exercise" });
      toast.error("Failed to add exercise. Please try again.");
    }
  };

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${backendURL}/api/exercises/${exerciseId}`
    );
    dispatch({ type: "SET_EXERCISES", payload: response.data });
    toast.info("Exercise Deleted successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to delete exercise" });
    toast.error("Failed to delete exercise. Please try again.");
  }
};

export const addFood = (foodFields) => async (dispatch) => {
  try {
    const response = await axios.post(`${backendURL}/api/food`, foodFields);
    dispatch({ type: "SET_FOOD", payload: response.data });
    toast.success("Food Item added successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to add food" });
    toast.error("Failed to add food item. Please try again.");
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${backendURL}/api/food/${foodId}`);
    dispatch({ type: "SET_FOOD", payload: response.data });
    toast.info("Food item deleted successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to delete food item" });
    toast.error("Failed to delete food item. Please try again.");
  }
};

export const addGoal = (goalFields) => async (dispatch) => {
  try {
    const response = await axios.post(`${backendURL}/api/goals`, goalFields);
    dispatch({ type: "SET_GOALS", payload: response.data });
    toast.success("Goal added successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to add goal" });
    toast.error("Failed to add goal. Please try again.");
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${backendURL}/api/goals/${goalId}`);
    dispatch({ type: "SET_GOALS", payload: response.data });
    toast.info("Goal deleted successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to delete goal" });
    toast.error("Failed to delete goal. Please try again.");
  }
};

export const editGoal = (goalFields) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${backendURL}/api/goals/${goalFields._id}`,
      goalFields
    );
    dispatch({ type: "SET_GOALS", payload: response.data });
    toast.info("Goal edited successfully!");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to edit goal" });
    toast.error("Failed to edit goal. Please try again.");
  }
};

export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendURL}/api/exercises`);
    dispatch({ type: "SET_EXERCISES", payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to fetch exercises" });
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendURL}/api/food`);
    dispatch({ type: "SET_FOOD", payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to fetch food items" });
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await axios.get(`${backendURL}/api/goals`);
    dispatch({ type: "SET_GOALS", payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: "SET_ERROR", payload: "Failed to fetch goals" });
  }
};
