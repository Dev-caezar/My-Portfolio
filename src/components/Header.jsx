import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiMenu, HiX } from "react-icons/hi"; // Added HiX for better "Close" state
import { motion, AnimatePresence } from "framer-motion"; // For smooth mobile transitions
import logo from "../assets/image/logo.png";

const themeStyles = {
  light: {
    scrolledBg: "bg-white/90 backdrop-blur-md shadow-sm",
    text: "text-gray-800 hover:text-purple-700",
    line: "bg-purple-700",
    mobileButton: "border-gray-200 bg-gray-50 text-gray-800",
    mobileMenu: "bg-white",
  },
  dark: {
    scrolledBg: "bg-gray-950/80 backdrop-blur-md shadow-lg",
    text: "text-gray-200 hover:text-purple-400",
    line: "bg-purple-400",
    mobileButton: "border-gray-800 bg-gray-900 text-gray-200",
    mobileMenu: "bg-gray-950",
  },
};

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [activeTitle, setActiveTitle] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navTitles = ["Home", "About", "Projects", "Experience"];
  const currentTheme = isDarkMode ? themeStyles.dark : themeStyles.light;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const title =
            id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTitle(title);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navTitles.forEach((title) => {
      const id = title === "Home" ? "hero" : title.toLowerCase();
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (title) => {
    setActiveTitle(title);
    const id = title === "Home" ? "hero" : title.toLowerCase();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const showBackground = isScrolled || isHovered || isMenuOpen;

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-0
        ${showBackground ? `py-4 ${currentTheme.scrolledBg}` : "py-4 bg-transparent"}
      `}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div
          onClick={() => handleNavClick("Home")}
          className="cursor-pointer transition-transform hover:scale-105 active:scale-95 flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navTitles.map((title, index) => (
            <h4
              key={index}
              onClick={() => handleNavClick(title)}
              className={`text-[11px] uppercase tracking-[0.25em] font-bold cursor-pointer relative pb-1 transition-colors duration-300 ${currentTheme.text} group`}
            >
              {title}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out ${
                  currentTheme.line
                } ${activeTitle === title ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </h4>
          ))}

          <button
            onClick={() => handleNavClick("Contact")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden flex items-center space-x-2 py-2 px-5 rounded-full border transition-all duration-300 shadow-sm ${currentTheme.mobileButton}`}
        >
          <span className="text-[10px] font-black uppercase tracking-widest">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          {isMenuOpen ? (
            <HiX className="w-4 h-4" />
          ) : (
            <HiMenu className="w-4 h-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 dark:border-gray-800 py-10 px-8 md:hidden ${currentTheme.mobileMenu}`}
          >
            <div className="flex flex-col space-y-8">
              {navTitles.map((title, index) => (
                <h4
                  key={index}
                  onClick={() => handleNavClick(title)}
                  className={`text-xl font-bold tracking-tight cursor-pointer transition-colors duration-200 ${
                    activeTitle === title
                      ? "text-purple-500"
                      : currentTheme.text
                  }`}
                >
                  {title}
                </h4>
              ))}
              <button
                onClick={() => handleNavClick("Contact")}
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
