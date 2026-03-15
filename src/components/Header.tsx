import { NavLink } from "react-router";

import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="header_nav">
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
        <div className="header_links">
          <NavLink to="/">home</NavLink>|<NavLink to="/about">about</NavLink>|
          <NavLink to="/projects">projects</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
