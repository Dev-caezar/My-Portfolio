import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full text-center py-4 transition-colors duration-500
            ${isDarkMode ? "bg-gray-950 text-gray-400" : "bg-gray-100 text-gray-600"}`}
    >
      <p>© {year} Oko Christian. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
