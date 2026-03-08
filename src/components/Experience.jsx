import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [activeTab, setActiveTab] = useState("experience");

  const skills = [
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React JS",
    "Next.js",
    "Tailwind CSS",
    "Styled-Component",
    "React Native",
    "Zustand",
    "Node.js",
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Quicklah (Startup Project)",
      years: "2025 - Present",
      description:
        "Contributing to the development of a startup project by building responsive user interfaces, optimizing performance, and collaborating with the product team to enhance user experience.",
    },
    {
      title: "Frontend Developer",
      company: "The Curve Africa",
      years: "2024 - Present",
      description:
        "Designed and developed responsive user interfaces for web applications, collaborating with a cross-functional team to deliver high-quality software products.",
    },
  ];

  const education = [
    {
      title: "The Curve Africa",
      institution: "Software Development",
      years: "2023 — 2024",
    },
    {
      title: "Expressway Senior High School",
      institution: "SSCE",
      years: "2013 — 2019",
    },
  ];

  const activeData = activeTab === "experience" ? experiences : education;

  return (
    <div
      id="experience"
      className={`w-full py-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6"
          >
            Curriculum
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
            <h3 className="text-4xl md:text-5xl font-light italic tracking-tight">
              Skills & Path
            </h3>

            <div className="flex flex-row gap-8 md:gap-10 border-b border-gray-200 dark:border-gray-800 w-full md:w-auto">
              {["experience", "education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-3 text-[11px] uppercase tracking-[0.2em] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-100"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-4 order-2 md:order-1">
            <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-10 font-bold">
              Technical Stack
            </h4>
            <div className="flex flex-col">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center py-3 border-l border-gray-200 dark:border-gray-800 pl-6 hover:border-purple-500 transition-colors cursor-default"
                >
                  <span
                    className={`text-lg font-light transition-colors ${
                      isDarkMode
                        ? "text-gray-400 group-hover:text-white"
                        : "text-gray-600 group-hover:text-black"
                    }`}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 order-1 md:order-2">
            <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-10 font-bold">
              {activeTab} Timeline
            </h4>

            <div className="relative border-l border-gray-200 dark:border-gray-800 ml-2 pl-8 md:pl-10 space-y-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeData.map((item, index) => (
                    <motion.div
                      key={item.title + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative mb-16 last:mb-0 group"
                    >
                      <div className="absolute -left-[37px] md:-left-[45px] top-2 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500 z-10" />
                        <div className="absolute w-2 h-2 rounded-full bg-purple-500 animate-ping opacity-75" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-3 block">
                        {item.years}
                      </span>

                      <h5 className="text-2xl font-medium mb-1 tracking-tight">
                        {item.title}
                      </h5>

                      <p
                        className={`text-sm font-medium mb-6 uppercase tracking-wider ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item.institution || item.company}
                      </p>

                      {item.description && (
                        <p
                          className={`text-base leading-relaxed font-light max-w-xl ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
