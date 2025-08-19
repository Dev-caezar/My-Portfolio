import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const Home = () => {
  return (
     <div className='flex-1'>
      <Hero />
      <AboutMe />
      <Project />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home