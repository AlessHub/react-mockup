import React from 'react'
import Logo from '../assets/logo.png'
import '../scss/navbar/Navbar.scss'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/">
              <div className='logoBtn'>
                <img className='logoImg' src={Logo} alt="Logo of the website"/>
                <span className='whiteSpan'>Soundwave</span>
              </div>
            </Link>
              
            <div className='navBtnContainer'>
                <Link className='navBtn' to="/Discover">Discover</Link>
                <Link className='navBtn' to="/Register">Join</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar