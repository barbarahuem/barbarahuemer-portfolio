import { NavLink } from "react-router";

import portrait from "../assets/images/outlined.png";

import "./Header.css";

export function Header() {
  return (
    <header>
      <nav>
        <div className="header_img_container">
          <img src={portrait} alt="portrait" className="header_img" />
        </div>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          |
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          |
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
