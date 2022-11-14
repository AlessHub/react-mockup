import React from 'react'
import LandingPageGirl from '../img/landing-page-girl.png'
import '../css/landingpage/landingpage.css'
function LandingPage() {
  return (
    <>
        <main>
            <img src={LandingPageGirl} alt="Girl feeling the music"/>
            <div>
                <h1>Feel The Music</h1>
                <p>Stream over 20 thousand songs with one click</p>
                <a href="">
                    <button>
                        Join Now
                    </button>
                </a>
            </div>
        </main>
    </>
  )
}

export default LandingPage