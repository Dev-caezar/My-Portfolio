import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image/logo.png";

const Header = () => {
  const [activeTitle, setActiveTitle] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navTitles = ["Home", "About", "Projects", "Experience"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title) => {
    setActiveTitle(title);
    const id = title === "Home" ? "hero" : title.toLowerCase();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-4  ${
        isScrolled || isMenuOpen
          ? "bg-[#05030a]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <div
          onClick={() => handleNavClick("Home")}
          className="cursor-pointer flex items-center gap-2"
        >
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navTitles.map((title) => (
            <h4
              key={title}
              onClick={() => handleNavClick(title)}
              className="text-[10px] uppercase tracking-[0.3em] font-bold cursor-pointer relative text-gray-400 hover:text-white transition-colors group"
            >
              {title}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${activeTitle === title ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </h4>
          ))}

          <button
            onClick={() => handleNavClick("Contact")}
            className="border border-purple-500/30 hover:bg-purple-600/20 text-purple-400 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 bg-[#0c071a] text-white"
        >
          <span className="text-[9px] font-black uppercase tracking-widest">
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
          {isMenuOpen ? (
            <HiX className="w-3 h-3" />
          ) : (
            <HiMenu className="w-3 h-3" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#05030a]/95 backdrop-blur-lg border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navTitles.map((title) => (
                <h4
                  key={title}
                  onClick={() => handleNavClick(title)}
                  className={`text-sm font-mono cursor-pointer ${activeTitle === title ? "text-purple-500" : "text-gray-400"}`}
                >
                  0{navTitles.indexOf(title) + 1} // {title.toUpperCase()}
                </h4>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
