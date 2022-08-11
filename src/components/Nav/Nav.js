import { NavLink } from "react-router-dom";
import "./style.css"

export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Skills">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
