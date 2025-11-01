import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';

const themeStyles = {
   light: {
      container: 'bg-white',
      text: 'text-gray-800 hover:text-indigo-800',
      line: 'bg-indigo-800',
      mobileButton: 'border-gray-300 bg-gray-100 text-indigo-800',
      mobileMenu: 'bg-white',
      mobileText: 'text-indigo-800 hover:text-indigo-800',
   },
   dark: {
      container: 'bg-gray-800/80 backdrop-blur-sm',
      text: 'text-gray-200 hover:text-indigo-400',
      line: 'bg-indigo-400',
      mobileButton: 'border-gray-600 bg-gray-800 text-gray-200',
      mobileMenu: 'bg-gray-800',
      mobileText: 'text-gray-200 hover:text-indigo-400',
   },
};

const Header = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
   const [activeTitle, setActiveTitle] = useState('Home');
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navTitles = ["Home", "About", "Projects", "Experience", "Contact"];
   const currentTheme = isDarkMode ? themeStyles.dark : themeStyles.light;

   // Smooth scroll handler
   const handleNavClick = (title) => {
      setActiveTitle(title);
      const section = document.getElementById(title.toLowerCase());
      if (section) {
         section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMenuOpen(false);
   };

   return (
      <div className='fixed w-full h-[10vh] md:h-[20vh] flex justify-end md:justify-center items-center z-50 p-4'>

         <div className={`hidden md:flex w-[60%] h-[80%] rounded-full shadow-md justify-around items-center px-8 ${currentTheme.container}`}>
            {navTitles.map((title, index) => (
               <h4
                  key={index}
                  onClick={() => handleNavClick(title)}
                  className={`font-[500] cursor-pointer relative pb-1 transition-colors duration-200 ${currentTheme.text} group`}
               >
                  {title}
                  <span
                     className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out ${currentTheme.line} ${activeTitle === title ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
               </h4>
            ))}
         </div>

         {/* Mobile Menu Button */}
         <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex items-center space-x-2 py-2 px-4 rounded-full border ${currentTheme.mobileButton}`}
            aria-label="Toggle navigation menu"
         >
            <span className='font-medium'>Menu</span>
            <HiMenu className="w-4 h-4" />
         </button>

         {/* Mobile Dropdown Menu */}
         {isMenuOpen && (
            <div className={`absolute top-[18vh] left-1/2 -translate-x-1/2 w-[80%] max-w-sm rounded-lg shadow-md z-40 py-4 ${currentTheme.mobileMenu}`}>
               <div className='flex flex-col items-center space-y-2'>
                  {navTitles.map((title, index) => (
                     <h4
                        key={index}
                        onClick={() => handleNavClick(title)}
                        className={`font-[500] cursor-pointer relative pb-1 transition-colors duration-200 ${currentTheme.mobileText} group`}
                     >
                        {title}
                        <span
                           className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out ${currentTheme.line} ${activeTitle === title ? 'w-full' : 'w-0 group-hover:w-full'}`}
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
