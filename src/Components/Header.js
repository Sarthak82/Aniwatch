import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
         <Link to='/'>
            <div className='header__logo'>
              <img src='https://avatarfiles.alphacoders.com/239/thumb-1920-239249.jpg' alt='aniwave logo'/>
            </div>
        </Link>

        <div className='header__search'>
            <Link to='/search'><button className='header__inputButtton'>Search button</button></Link>
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
