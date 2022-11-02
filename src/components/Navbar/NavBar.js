import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="menu-nav">
      <h1 className="menu-title">My first ecommerce</h1>
      <ul className="menu-item">
        <li>
          <a href="" className="menu-list">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="menu-list">
            Productos2
          </a>
        </li>
        <li>
          <a href="" className="menu-list">
            Buscador
          </a>
        </li>
        <li>
          <a href="" className="menu-list">
            Mi pedido
          </a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
