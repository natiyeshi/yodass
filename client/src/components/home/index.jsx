import React from 'react'
import Nav from '../common/Nav'
import Welcome from './Welcome'
import About from './About'
import Service from './Service'
import Testimonials from './Testimonials'
import Footer from './Footer'

const index = () => {
  return (
    <div className='overflow-hidden'>
        <Welcome />
        <About />
        <Service />
        <Testimonials />
        <Footer />
       
    </div>
  )
}

export default index