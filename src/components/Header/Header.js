import React from 'react'
import Menu from './Menu'
import '../../assets/styles/Header.css'

// assets
import Bm7Icon from '../../assets/static/bm7-icon.png'
import ProfileIcon from '../../assets/static/profile-icon.png'

const Header = () => {
  return (
    <header className='nav__container'>
      <Menu />
      <figure className='nav__img-container'>
        <img className='img_nav-2' src={Bm7Icon} alt='bm7-icon' />
      </figure>
      <figure className='nav__img-container'>
        <img className='img_nav-3' src={ProfileIcon} alt='profile' />
      </figure>
    </header>
  )
}

export default Header
