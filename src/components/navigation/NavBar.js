import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Navbar-container">
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to="/about">About</NavLink>
      </div>

      <div>
        <NavLink to="/widgets">Widget Dashboard</NavLink>
      </div>

      <div>
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
}
