import React from 'react'
import Samples from './Samples'
import Services from './Services'
import Footer from '../home/Footer'
const index = () => {
  return (
    <div className='overflow-hidden'>
        <Services />
        <Samples />
        <Footer />
    </div>
  )
}

export default index