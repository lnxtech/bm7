import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../assets/static/menu-icon.png";
import MenuIcon2 from "../../assets/static/menu-icon2.png";
import "../../assets/styles/Header.css";

// assets
import Bm7Icon from "../../assets/static/bm7-icon.png";
import ProfileIcon from "../../assets/static/profile-icon.png";
const Header = () => {
  const [theme, setTheme] = useState(false);
  const handleMenu = (e) => {
    setTheme(!theme);
  };
  return (
    <header className="nav__container">
      <Link
        onClick={handleMenu}
        to={theme ? "/Home" : "/Menu"}
        className="nav__img-container"
      >
        <img
          className="img_nav-1"
          src={theme ? MenuIcon2 : MenuIcon}
          alt="menu"
        />
      </Link>
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

// {mostrar
//   ? <div className='menu__container'>
//     <div className='menu__container--nav'>
//       <figure onClick={() => { setShow(!mostrar) }}>X</figure>
//       <img className='img_menu' src={Bm7Icon} />
//       <img className='img_menu' src={ProfileIcon} />
//     </div>
//     <div className='menu__a'>
//       <a>Calcule las probabilidades de sufrir un accidente laboral</a>
//     </div>
//     <div className='menu__container--nav2'>
//       <ul>
//         <li>
//           Menú
//         </li>
//         <li>
//           Conocenos
//         </li>
//         <li>
//           Soluciones
//         </li>
//         <li>
//           Blog
//         </li>
//         <li>
//           Contactanos
//         </li>
//       </ul>
//       <div className='menu__container--nav3'>
//         <a href='#'>FB</a>
//         <a href='#'>LK</a>
//       </div>
//     </div>
//     </div>
//   : ''}
