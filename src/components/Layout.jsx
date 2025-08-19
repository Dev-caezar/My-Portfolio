import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import DarkModeToggle from './DarkModeToggle '

const Layout = () => {
   return (
      <div className='w-full h-screen min-h-max'>
         <Header />
         <Outlet />
         <DarkModeToggle />
         <Footer />
      </div>
   )
}

export default Layout