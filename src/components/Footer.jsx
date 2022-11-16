import React from 'react'
import '../css/footer/footer.css'
import Facebook from '../img/facebook.svg'
import Twitter from '../img/twitter.svg'

function Footer() {
  return (
    <>
        <footer>
            <div className='footerInfo'>
                <span className='footerSpan'>About us</span>
                <span className='footerSpan'>Contact</span>
            </div>
            <div className='footerSocialContainer'>
                <div className='footerSocial'>
                    <img src={Twitter} alt="" />
                    <span className='footerSpan'>Twitter</span>
                </div>
                <div className='footerSocial'>
                    <img src={Facebook} alt="" />
                    <span className='footerSpan'>Facebook</span>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer