const initialState = {
  food: [],
  exercise: [],
  goals: [],
  error: null
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_EXERCISES":
      return {
        ...state,
        exercise: action.payload,
        error: null
      };

    case "SET_FOOD":
      return {
        ...state,
        food: action.payload,
        error: null
      };

    case "SET_GOALS":
      return {
        ...state,
        goals: action.payload,
        error: null
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
