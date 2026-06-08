import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { toggleTheme } from "../global/features";

const DarkModeToggle = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  // This syncs your Redux state directly with the HTML root tag so Tailwind utilities function properly
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        // Changed text-white to amber colors for sun icon so it is visible
        <IoSunnyOutline className="w-6 h-6 text-amber-500" />
      ) : (
        // Changed text-white to gray colors for moon icon so it stands out on the light button
        <IoMoonOutline className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default DarkModeToggle;
