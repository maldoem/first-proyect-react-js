import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="menu-nav">
      <h1 className="menu-title">Malem</h1>
      <ul className="menu-item">
        <li className="menu-list">
          <NavLink to="/" className="activar">
            Home
          </NavLink>
        </li>
        <li className="menu-list">
          <NavLink to="category/venzo" className="activar">
            Venzo
          </NavLink>
        </li>
        <li className="menu-list">
          <NavLink to="category/top mega" className="activar">
            Top Mega
          </NavLink>
        </li>
        <li className="menu-list">
          <NavLink to="/category/firebird" className="activar">
            FireBird
          </NavLink>
        </li>
      </ul>

      <Link to="/Cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
