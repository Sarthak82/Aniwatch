import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
         <Link to='/'>
            <div className='header__logo'>
              <img src='https://images.sftcdn.net/images/t_app-icon-m/p/5222cf88-e4dc-4a9d-bda1-4f6368b83184/3620294077/aniwatch-anime-online-tv-logo' alt='aniwave logo'/>
            </div>
        </Link>

        <div className='header__search'>
            <input className="header__input"type='text' placeholder='Search Anime'/>
            <button className='header__inputButtton'>Search</button>
        </div>

        <div className='header__menu'>
            <Link to='/'><button className='header__button'>Home</button></Link>
            <Link to='/popular'><button className='header__button'>Popular</button></Link>
            <Link to="/recommendation"><button className='header__button btn'>RECOMM</button></Link>
        </div>

      
    </div>
  )
}

export default Header
