import React from "react";
import "../../assets/styles/Header.css";

// assets
import MenuIcon from "../../assets/static/menu-icon.png";
import Bm7Icon from "../../assets/static/bm7-icon.png";
import ProfileIcon from "../../assets/static/profile-icon.png";

const Header = () => {
  return (
    <header className="header__container">
      <figure className="header__item">
        <img className="menu__icon" src={MenuIcon} alt="menu" />
      </figure>
      <figure className="header__item">
        <img className="bm7__icon" src={Bm7Icon} alt="bm7-icon" />
      </figure>
      <figure className="header__item">
        <img className="profile__icon" src={ProfileIcon} alt="profile" />
      </figure>
    </header>
  );
};

export default Header;
