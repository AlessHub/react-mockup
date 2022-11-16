import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../css/registerpage/register.css'
import Form from '../components/Form'

function RegisterPage() {
  return (
    <>
        <Navbar/>
        <main className='registerContainer'>
            <h1 className='registerTitle'>Join the <span className='registerSpan'>fun.</span></h1>
            <Form/>
        </main>
        <Footer/>
    </>
  )
}

export default RegisterPage