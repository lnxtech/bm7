import React from "react";
import "../../assets/styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu__container">
      <article className="menu__a">
        <p>Calcule las probabilidades de sufrir un accidente laboral</p>
      </article>
      <div className="menu__container--nav2">
        <ul className="list__container">
          <li>
            <a href="/">Menú</a>
          </li>
          <li>
            <a href="/">Conócenos</a>
          </li>
          <li>
            <a href="/">Soluciones</a>
          </li>
          <li>
            <a href="/"> Blog </a>
          </li>
          <li>
            <a href="/">Contáctanos</a>
          </li>
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
