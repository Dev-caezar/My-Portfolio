import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

// Replace with your actual paths

import { projects } from "../data/projects";

const Projects = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  // Adjusted for better mobile experience
  const projectsPerPage = 3;

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className={`w-full py-16 md:py-24 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h3 className="text-3xl md:text-4xl font-light italic">
              My Projects
            </h3>
            <p className="text-[10px] md:text-xs font-bold opacity-40 uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </header>

        {/* Grid adjusted for all screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group p-6 md:p-8 rounded-3xl border transition-all cursor-pointer flex flex-col h-full ${
                  isDarkMode
                    ? "bg-gray-900/40 border-gray-800 hover:border-purple-500/50"
                    : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-xl"
                }`}
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <img
                    src={project.logo}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-xl p-2 shadow-sm"
                    alt={project.title}
                  />
                  <div
                    className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                  >
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 text-purple-500 text-sm md:text-base" />
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-medium mb-3">
                  {project.title}
                </h4>
                <p
                  className={`text-sm font-light mb-6 line-clamp-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination - More spacing for touch targets */}
        <div className="flex justify-center items-center gap-8 mt-16 md:mt-20">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-4 rounded-full border border-purple-500 disabled:opacity-10 hover:bg-purple-500/10 transition-colors"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-4 rounded-full border border-purple-500 disabled:opacity-10 hover:bg-purple-500/10 transition-colors"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Optimized Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`relative w-full max-w-4xl max-h-full overflow-y-auto rounded-2xl md:rounded-[2.5rem] shadow-2xl ${
                isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white"
              }`}
            >
              {/* Close Button - More visible on mobile */}
              <div className="sticky top-0 z-20 flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 md:p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform shadow-lg"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="px-6 pb-10 md:px-16 md:pb-16 -mt-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Column: Info */}
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <img
                      src={selectedProject.logo}
                      className="w-20 h-20 mx-auto lg:mx-0 mb-6 bg-white rounded-2xl p-3 shadow-xl"
                      alt=""
                    />
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {selectedProject.title}
                    </h3>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] md:text-[10px] px-3 py-1 rounded-full border border-purple-500/30 text-purple-500 font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-row lg:flex-col gap-4 justify-center lg:justify-start pt-6 border-t border-gray-100 dark:border-gray-800">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-500 hover:underline"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
                      >
                        Source Code <FaGithub />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:w-2/3 space-y-8 md:space-y-10">
                    <section>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-3">
                        The Challenge
                      </h4>
                      <p className="text-base md:text-lg font-light leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-3">
                        Contributions
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {selectedProject.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
