import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, deleteGoal, editGoal } from "../redux/actions";
import { formatDate } from "../utils/formatDate";

function GoalsPage() {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);

  const initialGoalState = {
    goalName: "",
    goalDescription: "",
    targetDate: "",
    targetCaloriesValue: "",
    status: "In Progress",
  };

  const [goalFields, setGoalFields] = useState(initialGoalState);
  const [editMode, setEditMode] = useState(false);
  const [goalIdToEdit, setGoalIdToEdit] = useState(null);

  function handleFieldChange(e) {
    const { name, value } = e.target;
    setGoalFields({
      ...goalFields,
      [name]: value,
    });
  }

  function handleAddGoal() {
    if (
      goalFields.goalName &&
      goalFields.targetDate &&
      goalFields.targetCaloriesValue
    ) {
      if (editMode) {
        dispatch(editGoal({ ...goalFields, _id: goalIdToEdit }));
        setEditMode(false);
        setGoalIdToEdit(null);
        setGoalFields(initialGoalState);
      } else {
        dispatch(addGoal(goalFields));
        setGoalFields(initialGoalState);
      }
    }
  }

  function handleEditGoal(goal) {
    const {
      goalName,
      goalDescription,
      targetDate,
      targetCaloriesValue,
      status,
    } = goal;
    setEditMode(true);
    setGoalIdToEdit(goal._id);
    setGoalFields({
      goalName,
      goalDescription,
      targetDate,
      targetCaloriesValue,
      status,
    });

    document.getElementById("goal-form").scrollIntoView({ behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditMode(false);
    setGoalIdToEdit(null);
    setGoalFields(initialGoalState);
  }

  function handleDeleteGoal(goalId) {
    dispatch(deleteGoal(goalId));
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-semibold">Goals Page</h2>
      <div className="flex gap-8 flex-col sm:flex-row">
        <form id="goal-form" className="w-96 max-w-[90vw]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Goal Name:
            </label>
            <input
              type="text"
              name="goalName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={goalFields.goalName}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Goal Description:
            </label>
            <textarea
              name="goalDescription"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={goalFields.goalDescription}
              onChange={handleFieldChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Target Date:
            </label>
            <input
              type="date"
              name="targetDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={goalFields.targetDate}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Target Calories Value:
            </label>
            <input
              type="number"
              name="targetCaloriesValue"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={goalFields.targetCaloriesValue}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status:
            </label>
            <select
              name="status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={goalFields.status}
              onChange={handleFieldChange}
            >
              <option value="In Progress">In Progress</option>
              <option value="Achieved">Achieved</option>
              <option value="Abandoned">Abandoned</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddGoal}
            >
              {editMode ? "Update Goal" : "Add Goal"}
            </button>
            {editMode && (
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <div className="mt-4 grow">
          <h2 className="text-2xl font-semibold mb-2">Goals</h2>
          {goals.length === 0 ? (
            <p>No goals added yet.</p>
          ) : (
            <ul>
              {goals.map((goal) => (
                <li
                  key={goal._id}
                  className="mb-4 bg-white rounded-lg p-4 shadow-md flex justify-between gap-4 items-center"
                >
                  <div>
                    <p className="text-lg font-semibold">{goal.goalName}</p>
                    <p className="text-gray-700 text-sm">
                      Description: {goal.goalDescription}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Target Date:</span>{" "}
                      {formatDate(goal.targetDate)}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Target Calories:</span>{" "}
                      {goal.targetCaloriesValue}
                    </p>
                    <div className="mt-2">
                      <span
                        className={`w-3 h-3 rounded-full inline-block mr-1 ${
                          goal.status === "In Progress"
                            ? "bg-yellow-400"
                            : goal.status === "Achieved"
                            ? "bg-green-400"
                            : "bg-red-400"
                        }`}
                      ></span>
                      <span className="text-sm font-semibold">
                        {goal.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold"
                      onClick={() => handleDeleteGoal(goal._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                      onClick={() => handleEditGoal(goal)}
                    >
                      Edit
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

export default GoalsPage;
