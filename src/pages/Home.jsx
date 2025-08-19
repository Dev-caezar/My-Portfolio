import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
     <div className='w-ful h-screen min-h-max'>
      <Hero />
      <AboutMe />
    </div>
  )
}

export default Home