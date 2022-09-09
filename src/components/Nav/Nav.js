import { NavLink } from "react-router-dom"
//import { projects, skills, Contact } from '../../portfolio'
import "./style.css"

export default function Nav() {
  return (
    <ul>
      
      {/* <li className="nav">
        <NavLink activeclassname="active" to="/Home">
          SZ
        </NavLink>
      </li> */}
      <li className="nav">
        <NavLink activeclassname="active" to="/">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" to="/Projects">
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
