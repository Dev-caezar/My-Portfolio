import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'

const Home = () => {
  return (
     <div className='flex-1'>
      <Hero />
      <AboutMe />
      <Project />
    </div>
  )
}

export default Home