import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='ch'>Hello I'm</h5>
        <h1 className='ch'>Kartikye Gautam</h1>
        <h5 className="ch">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header