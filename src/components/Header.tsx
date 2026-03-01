import { NavLink } from "react-router";

import "./Header.css";

export function Header() {
  return (
    <header>
      <nav>
        <div className="header_img_container">
          <img
            src="/icon.svg"
            height={40}
            width={40}
            alt="portrait"
            className="header_img"
            fetchPriority="high"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/">home</NavLink> |
          </li>
          <li>
            <NavLink to="/about">about</NavLink> |
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
