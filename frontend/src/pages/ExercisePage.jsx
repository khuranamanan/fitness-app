import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise } from "../redux/actions";

function ExercisePage() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercise);

  const [exerciseName, setExerciseName] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  function handleAddExercise() {
    if (exerciseName && duration && caloriesBurned) {
      dispatch(addExercise(exerciseName, duration, caloriesBurned));
      setExerciseName("");
      setDuration("");
      setCaloriesBurned("");
    }
  }

  function handleDeleteExercise(exerciseId) {
    dispatch(deleteExercise(exerciseId));
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-semibold">Exercise Page</h2>
      <div className="flex gap-8 flex-col sm:flex-row">
        <form className="w-96 max-w-[90vw]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Exercise Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Duration (minutes):
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Calories Burned:
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddExercise}
          >
            Add Exercise
          </button>
        </form>
        <div className="mt-4 grow">
          <h2 className="text-2xl font-semibold mb-2">Exercises</h2>
          {exercises.length === 0 ? (
            <p>No exercises added yet.</p>
          ) : (
            <ul>
              {exercises.map((exercise) => (
                <li
                  key={exercise._id}
                  className="mb-4 bg-white rounded-lg p-4 shadow-md flex justify-between gap-4 items-center"
                >
                  <div>
                    <p className="text-lg font-semibold">
                      {exercise.exerciseName} ({exercise.duration} minutes)
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Calories Burned:</span>{" "}
                      {exercise.caloriesBurned}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold"
                      onClick={() => handleDeleteExercise(exercise._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExercisePage;
