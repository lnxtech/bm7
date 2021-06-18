import React from "react";
import "../../assets/styles/Menu.css";

import Header from "../../components/Header/Header.js";

const Menu = () => {
  return (
    <div className="menu__container">
      <Header />
      <div className="menu__a">
        <p>Calcule las probabilidades de sufrir un accidente laboral</p>
      </div>
      <div className="menu__container--nav2">
        <ul>
          <li> Menú </li>
          <li> Conocenos </li>
          <li> Soluciones </li>
          <li> Blog </li>
          <li> Contactanos </li>
        </ul>
        <div className="menu__container--nav3">
          <a href="#">FB</a>
          <a href="#">LK</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
