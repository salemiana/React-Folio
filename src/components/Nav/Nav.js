import { NavLink } from "react-router-dom"
import { projects, Skills, Contact } from '../../portfolio'
import "./style.css"

export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="../../Projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/Skills">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
