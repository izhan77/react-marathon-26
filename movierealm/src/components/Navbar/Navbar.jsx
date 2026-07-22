import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieRealm</h1>

      <div className="navbar_links">
        <NavLink to="/">
          Popular <img src={Fire} alt="Fire emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated <img src={Star} alt="Star emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming{" "}
          <img src={Party} alt="Party emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
