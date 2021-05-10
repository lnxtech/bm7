import React from "react";
import "../../assets/styles/Header.css";

// assets
import MenuIcon from "../../assets/static/menu-icon.png";
import Bm7Icon from "../../assets/static/bm7-icon.png";
import ProfileIcon from "../../assets/static/profile-icon.png";

const Header = () => {
  return (
    <header className="nav__container">
      <figure className="nav__img-container">
        <img className="img_nav-1" src={MenuIcon} alt="menu" />
      </figure>
      <figure className="nav__img-container">
        <img className="img_nav-2" src={Bm7Icon} alt="bm7-icon" />
      </figure>
      <figure className="nav__img-container">
        <img className="img_nav-3" src={ProfileIcon} alt="profile" />
      </figure>
    </header>
  );
};

export default Header;
