import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Popular from './components/Popular'

import Testimonial from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Testimonial/>
      
      <Footer/>
    </>
  )
}

export default App
