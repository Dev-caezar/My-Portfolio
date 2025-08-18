import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import DarkModeToggle from './DarkModeToggle '

const Layout = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <DarkModeToggle />
         <Footer />
      </div>
   )
}

export default Layout