import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar-logo">Nav</div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/home">
              Home
              <span className="homelogo">0</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              profile
              <span className="homelogo">0</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
