import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood, deleteFood } from "../redux/actions";

function FoodPage() {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.food);

  const initialFoodState = {
    foodName: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  };

  const [foodFields, setFoodFields] = useState(initialFoodState);

  function handleFieldChange(e) {
    setFoodFields({
      ...foodFields,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddFood() {
    if (
      foodFields.foodName &&
      foodFields.calories &&
      foodFields.protein &&
      foodFields.carbohydrates &&
      foodFields.fat
    ) {
      dispatch(addFood(foodFields));
      setFoodFields(initialFoodState);
    }
  }

  function handleDeleteFood(foodId) {
    dispatch(deleteFood(foodId));
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-semibold">Food Page</h2>
      <div className="flex gap-8 flex-col sm:flex-row">
        <form className="w-96 max-w-[90vw]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Food Name:
            </label>
            <input
              type="text"
              name="foodName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={foodFields.foodName}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Calories:
            </label>
            <input
              type="number"
              name="calories"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={foodFields.calories}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Protein (grams):
            </label>
            <input
              type="number"
              name="protein"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={foodFields.protein}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Carbohydrates (grams):
            </label>
            <input
              type="number"
              name="carbohydrates"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={foodFields.carbohydrates}
              onChange={handleFieldChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fat (grams):
            </label>
            <input
              type="number"
              name="fat"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={foodFields.fat}
              onChange={handleFieldChange}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddFood}
          >
            Add Food
          </button>
        </form>
        <div className="mt-4 grow">
          <h2 className="text-2xl font-semibold mb-2">Foods</h2>
          {foodItems.length === 0 ? (
            <p>No food items added yet.</p>
          ) : (
            <ul>
              {foodItems.map((food) => (
                <li
                  key={food._id}
                  className="mb-4 bg-white rounded-lg p-4 shadow-md flex justify-between gap-4 items-center"
                >
                  <div>
                    <p className="text-lg font-semibold">{food.foodName}</p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Calories:</span>{" "}
                      {food.calories}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Protein:</span>{" "}
                      {food.protein}g
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Carbs:</span>{" "}
                      {food.carbohydrates}g
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Fat:</span> {food.fat}g
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold"
                      onClick={() => handleDeleteFood(food._id)}
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

export default FoodPage;
