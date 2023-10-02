import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const getNavLinkClassName = ({ isActive }) =>
    `text-white ${isActive ? "font-bold" : ""}`;

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" exact className="font-bold text-white text-2xl">
          Fitness Tracker
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={getNavLinkClassName}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercise" className={getNavLinkClassName}>
              Exercise
            </NavLink>
          </li>
          <li>
            <NavLink to="/food" className={getNavLinkClassName}>
              Food
            </NavLink>
          </li>
          <li>
            <NavLink to="/goals" className={getNavLinkClassName}>
              Goals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
