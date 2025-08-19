import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import DarkModeToggle from './DarkModeToggle '

const Layout = () => {
   return (
      <div className="w-full min-h-screen flex flex-col">
         <Header />
         <main className="flex-grow">
            <Outlet />
         </main>
         <DarkModeToggle />
         <Footer />
      </div>

   )
}

export default Layout