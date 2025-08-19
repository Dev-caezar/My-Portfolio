import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
   const [activeTitle, setActiveTitle] = useState('Home');
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navTitles = ["Home", "About", "Experience", "Projects", "Contact"];

   return (
      <div className='fixed w-full h-[12vh] md:h-[20vh] flex justify-center items-center z-50 p-4'>

         {/* Desktop Navigation */}
         <div className='hidden md:flex w-[60%] h-[80%] rounded-full shadow-md justify-around items-center px-8'>
            {navTitles.map((title, index) => (
               <h4
                  key={index}
                  onClick={() => setActiveTitle(title)}
                  className={`font-[500] cursor-pointer relative pb-1 transition-colors duration-200 
                     ${isDarkMode
                        ? "text-gray-200 hover:text-indigo-400"
                        : "text-gray-800 hover:text-indigo-800"}`}
               >
                  {title}
                  <span
                     className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out 
                        ${isDarkMode ? "bg-indigo-400" : "bg-indigo-800"} 
                        ${activeTitle === title ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
               </h4>
            ))}
         </div>

         {/* Mobile Menu Button */}
         <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex items-center space-x-2 py-2 px-4 rounded-full border 
               ${isDarkMode
                  ? "border-gray-600 bg-gray-800 text-gray-200"
                  : "border-gray-300 bg-gray-100 text-indigo-800"}`}
            aria-label="Toggle navigation menu"
         >
            <span className='font-medium'>Menu</span>
            <HiMenu className="w-4 h-4" />
         </button>

         {/* Mobile Dropdown */}
         {isMenuOpen && (
            <div className={`absolute top-[18vh] left-1/2 -translate-x-1/2 w-[80%] max-w-sm rounded-lg shadow-md z-40 py-4 
               ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>

               <div className='flex flex-col items-center space-y-2'>
                  {navTitles.map((title, index) => (
                     <h4
                        key={index}
                        onClick={() => {
                           setActiveTitle(title);
                           setIsMenuOpen(false);
                        }}
                        className={`font-[500] cursor-pointer relative pb-1 transition-colors duration-200 
                           ${isDarkMode
                              ? "text-gray-200 hover:text-indigo-400"
                              : "text-indigo-800 hover:text-indigo-800"}`}
                     >
                        {title}
                        <span
                           className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out 
                              ${isDarkMode ? "bg-indigo-400" : "bg-indigo-800"} 
                              ${activeTitle === title ? 'w-full' : 'w-0 group-hover:w-full'}`}
                        ></span>
                     </h4>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default Header;
