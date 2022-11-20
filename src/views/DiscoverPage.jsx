import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DiscoverContent from '../components/DiscoverContent'

function DiscoverPage() {
  return (
    <>
        <Navbar/>
        <main>
            <DiscoverContent/>
        </main>
        <Footer/>
    </>
  )
}

export default DiscoverPage