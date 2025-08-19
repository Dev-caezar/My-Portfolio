import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
     <div className='flex-1'>
      <Hero />
      <AboutMe />
    </div>
  )
}

export default Home