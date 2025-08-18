import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { toggleTheme } from '../global/features';

const DarkModeToggle = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
   const dispatch = useDispatch();

   return (
      <button
         onClick={() => dispatch(toggleTheme())}
         className='fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg bg-white dark:bg-blue-800 transition-colors duration-500'
         aria-label="Toggle dark mode"
      >
         {isDarkMode ? (
            <IoSunnyOutline className="w-6 h-6 text-white" />
         ) : (
            <IoMoonOutline className="w-6 h-6 text-white" />
         )}
      </button>
   );
};

export default DarkModeToggle;