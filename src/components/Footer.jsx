import React from 'react'
import '../scss/footer/footer.scss'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'

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