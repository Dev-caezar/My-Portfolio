import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";

const themeStyles = {
  light: {
    scrolledBg: "bg-white/90 backdrop-blur-md shadow-sm",
    text: "text-gray-800 hover:text-purple-700",
    line: "bg-purple-700",
    mobileButton: "border-gray-300 bg-gray-100 text-purple-800",
    mobileMenu: "bg-white",
  },
  dark: {
    scrolledBg: "bg-gray-950/80 backdrop-blur-md shadow-lg",
    text: "text-gray-200 hover:text-indigo-400",
    line: "bg-indigo-400",
    mobileButton: "border-gray-700 bg-gray-900 text-gray-200",
    mobileMenu: "bg-gray-900",
  },
};

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [activeTitle, setActiveTitle] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navTitles = ["Home", "About", "Projects", "Experience", "Contact"];
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12
        ${showBackground ? `py-4 ${currentTheme.scrolledBg}` : "py-8 bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div
          onClick={() => handleNavClick("Home")}
          className={`text-xl font-bold cursor-pointer transition-colors ${currentTheme.text}`}
        >
          Oko Christian<span className="text-purple-500">.</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navTitles.map((title, index) => (
            <h4
              key={index}
              onClick={() => handleNavClick(title)}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold cursor-pointer relative pb-1 transition-colors duration-300 ${currentTheme.text} group`}
            >
              {title}
              <span
                className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-in-out ${
                  currentTheme.line
                } ${activeTitle === title ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </h4>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden flex items-center space-x-2 py-2 px-5 rounded-full border transition-all duration-300 ${currentTheme.mobileButton}`}
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <HiMenu
            className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 dark:border-gray-800 py-8 px-6 md:hidden ${currentTheme.mobileMenu}`}
        >
          <div className="flex flex-col space-y-6">
            {navTitles.map((title, index) => (
              <h4
                key={index}
                onClick={() => handleNavClick(title)}
                className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${
                  activeTitle === title ? "text-purple-500" : currentTheme.text
                }`}
              >
                {title}
              </h4>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
