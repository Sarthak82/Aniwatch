import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
         <Link to='/'>
            <div className='header__logo'>
              <img src='/images/Shingeki No Kyojin Asas Da Liberdade Logo - Logo Vector Online 2019-removebg-preview.jpg' alt='logo'/>
            </div>
        </Link>

        <div className='header__search'>
            <Link to='/search'><button className='header__inputButtton'>Search Anime</button></Link>
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
