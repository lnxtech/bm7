import React, { useState } from 'react'
import MenuIcon from '../../assets/static/menu-icon.png'

const Menu = () => {
  const [mostrar, setShow] = useState(false)

  return (
    <div className='menu'>
      <figure className='nav__img-container'>
        <img className='img_nav-1' src={MenuIcon} alt='menu' onClick={() => { setShow(!mostrar) }} />
      </figure>
      {mostrar
        ? <div className='menu__container'>
          <div className='menu__container--nav'>
            <figure>X</figure>
            <h5>BM7</h5>
            <figure>login</figure>
          </div>
          <ul>
            <li>
              Menú
            </li>
            <li>
              Conocenos
            </li>
            <li>
              Soluciones
            </li>
            <li>
              Blog
            </li>
            <li>
              Contactanos
            </li>
          </ul>
          <div>
            <a href='#'>FB</a>
            <a href='#'>LK</a>
          </div>
          </div>
        : ''}
    </div>
  )
}

export default Menu
