import React from 'react'
import Navbar from '../components/Navbar'
import LandingContent from '../components/LandingContent'
function LandingPage() {
  return (
    <>
      <Navbar/>
      <main className='landingContainer'>
          <LandingContent/>
          <div class="circleContainer">
            <div class="circle"></div>
          </div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
      </main> 
    </>
  )
}

export default LandingPage