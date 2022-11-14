import React from 'react'
import Logo from '../img/logo.png'
import '../css/navbar/Navbar.css'

function Navbar() {
  return (
    <>
        <nav>
            <a href="home"className='logoBtn'>
                <img src={Logo} alt="Logo of the website"/>
                <span>Soundwave</span>
            </a>
            <div className='navBtnContainer'>
                <a>Discover</a>
                <a>Join</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar