import React from 'react'
import Navbar from '../components/Navbar'
import LandingContent from '../components/LandingContent'
function LandingPage() {
  return (
    <>
        <Navbar/>
        <main className='landingContainer'>
            <LandingContent/>
            <div class="mycircles">
              <div>
              </div>
            </div>
        </main> 
    </>
  )
}

export default LandingPage