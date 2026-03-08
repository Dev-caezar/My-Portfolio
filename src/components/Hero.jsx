import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import myself from "../assets/image/myself.jpg";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Hero = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className={`w-full min-h-screen flex items-center justify-center pt-28 pb-12 lg:pt-20 lg:pb-0 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[85%] mx-auto px-6 md:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-purple-500 mb-4"
          >
            Frontend Developer
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Oko Christian
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I build accessible, high-performance frontend experiences using
            React, TailwindCSS, and modern best practices. Focused on clean
            code, product thinking, and shipping fast.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 w-full sm:w-auto mt-2"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg text-sm font-bold hover:shadow-lg active:scale-95 transition-all">
                Contact Me
              </button>

              <a
                href="/Oko-Christian-CV.docx"
                download
                className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-sm font-bold border transition-all ${
                  isDarkMode
                    ? "border-gray-800 hover:bg-gray-900 text-gray-300"
                    : "border-gray-200 hover:bg-gray-50 shadow-sm text-gray-700"
                }`}
              >
                <FaDownload /> Resume
              </a>
            </div>

            <div className="hidden lg:block w-[1px] h-8 bg-gray-200 dark:bg-gray-800 mx-2" />

            <div className="flex items-center gap-8">
              <a
                href="http://linkedin.com/in/oko-christian-aa7262352"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-purple-500 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl opacity-60 hover:opacity-100" />
              </a>
              <a
                href="https://github.com/Dev-caezar"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-purple-500 transition-all duration-300"
              >
                <FaGithub className="text-2xl opacity-60 hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-[11px] font-bold uppercase tracking-widest opacity-40"
          >
            <div>
              Location: <span className="opacity-100 ml-1">Lagos, Nigeria</span>
            </div>
            <div>
              Open to:{" "}
              <span className="opacity-100 text-purple-500 ml-1">
                Remote / Contract
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={myself}
              alt="Oko Christian"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            <div
              className={`absolute inset-0 pointer-events-none ${
                isDarkMode
                  ? "bg-gradient-to-t from-gray-950/40 to-transparent"
                  : "bg-gradient-to-t from-black/10 to-transparent"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
