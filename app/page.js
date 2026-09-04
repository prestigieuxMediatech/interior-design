import React from 'react'
import Hero from './Component/Hero'
import NavBar from './Component/NavBar'
import About from './Component/About'
import Services from './Component/Services'
import FAQ from './Component/FAQ'
import LetsTalk from './Component/LetsTalk'

const page = () => {
  return (
    <div className='  '>
      
      <Hero/>
      <About/>
      <Services/>
      <FAQ/>
      <LetsTalk/>
    </div>
  )
}

export default page