import { Routes, Route, useLocation } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ExercisePage from "./pages/ExercisePage";
import FoodPage from "./pages/FoodPage";
import GoalsPage from "./pages/GoalsPage";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExercises, fetchFood, fetchGoals } from "./redux/actions";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavigationBar />
      {error && (
        <div className="p-4 m-2 border border-red-500 bg-red-200 rounded text-red-700">
          Error: {error}
        </div>
      )}
      <div className="container mx-auto p-4 flex-grow flex relative">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/goals" element={<GoalsPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
