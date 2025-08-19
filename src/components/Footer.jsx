import React from "react";
import { useSelector } from 'react-redux';

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <footer
      className={`w-full text-center py-4 transition-colors duration-500
            ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
    >
      <p>© 2025 Oko Christian. All rights reserved.</p>
    </footer>
  );
};

export default Footer;