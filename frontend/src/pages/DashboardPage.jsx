import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editGoal } from "../redux/actions";

function DashboardPage() {
  const dispatch = useDispatch();
  const exerciseItems = useSelector((state) => state.exercise);
  const foodItems = useSelector((state) => state.food);
  const goals = useSelector((state) => state.goals);

  const totalCaloriesBurned = exerciseItems.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  const totalCaloriesConsumed = foodItems.reduce(
    (total, food) => total + food.calories,
    0
  );

  const activeGoals = goals.filter((goal) => goal.status === "In Progress");
  const totalCaloriesGoal = activeGoals.reduce(
    (total, goal) => total + Number(goal.targetCaloriesValue),
    0
  );

  useEffect(() => {
    activeGoals.forEach((goal) => {
      if (goal.targetCaloriesValue - totalCaloriesBurned <= 0) {
        dispatch(editGoal({ ...goal, status: "Achieved" }));
      }
    });
  }, [totalCaloriesBurned, activeGoals, dispatch]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Calories Burned */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Total Calories Burned</p>
          <p>{totalCaloriesBurned} Calories</p>
        </div>

        {/* Total Calories Consumed */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Total Calories Consumed</p>
          <p>{totalCaloriesConsumed} Calories</p>
        </div>

        {activeGoals.length > 0 && (
          <>
            {/* Total Calories Goal */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">Total Calories Goal</p>
              <ul>
                {activeGoals.map((goal) => (
                  <li key={goal._id}>
                    {goal.goalName} - {goal.targetCaloriesValue} Calories
                  </li>
                ))}
              </ul>
              <p>
                {" "}
                <span className="font-semibold">Total:</span>{" "}
                {totalCaloriesGoal} Calories
              </p>
            </div>

            {/* Remaining Calories to Goal */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">
                Remaining Calories to Goal
              </p>
              <ul>
                {activeGoals.map((goal) => (
                  <li key={goal._id}>
                    {goal.goalName} -{" "}
                    {goal.targetCaloriesValue - totalCaloriesBurned <= 0
                      ? "Completed"
                      : goal.targetCaloriesValue -
                        totalCaloriesBurned +
                        " Calories"}
                  </li>
                ))}
              </ul>
            </div>

            {/* Display Goals and Status */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">Goals and Status</p>
              {goals.map((goal) => (
                <div
                  key={goal._id}
                  className="mb-2 flex justify-between items-center"
                >
                  <p>
                    {goal.goalName} - Status: {goal.status}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
