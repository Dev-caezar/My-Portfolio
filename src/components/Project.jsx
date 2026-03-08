import React, { useState } from "react";
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
import bookTrackerLogo from "../assets/image/book-tracker.png";
import zScoutsLogo from "../assets/image/zscouts.png";
import quicklahLogo from "../assets/image/quicklah.png";
import divinusGratiaLogo from "../assets/image/divinusgratia.png";
import arouraLogo from "../assets/image/aruora.png";

const Projects = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 3;

  const projects = [
    {
      title: "Book Management Tracker",
      description:
        "A thoughtfully designed reading companion that empowers book lovers to track progress, manage libraries, and set reading goals.",
      logo: bookTrackerLogo,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      responsibilities: [
        "Built responsive React components",
        "Integrated book tracking APIs on the frontend",
        "Implemented UI/UX features for tracking progress",
        "Ensured cross-browser compatibility and responsiveness",
      ],
      liveLink: "https://book-management-tracker.vercel.app/",
      githubLink: "https://github.com/Dev-caezar/book-management-tracker",
    },
    {
      title: "Z-Scouts",
      description:
        "A sports networking platform connecting grassroots players, scouts, and professional clubs.",
      logo: zScoutsLogo,
      technologies: ["React Js", "CSS3", "Axios", "Redux"],
      responsibilities: [
        "Developed responsive UI components using React",
        "Managed global state with Redux",
        "Integrated APIs to display player and club information",
        "Optimized user experience and navigation flows",
      ],
      liveLink: "https://z-scoutsf.vercel.app/",
      githubLink: "https://github.com/Dev-caezar/ZScouts",
    },
    {
      title: "Quicklah",
      description:
        "A modern food delivery platform with real-time order tracking and driver management.",
      logo: quicklahLogo,
      technologies: ["React.js", "Tailwind CSS", "Redux", "Axios"],
      responsibilities: [
        "Implemented interactive UI components with React and Tailwind CSS",
        "Managed frontend state using Redux",
        "Integrated real-time order APIs for live tracking",
        "Ensured seamless UX for customers and drivers",
      ],
      liveLink: "https://quicklah.vercel.app/",
      githubLink: "https://github.com/Quicklah/Quicklah",
    },
    {
      title: "DivinusGratia",
      description:
        "A UK-based cleaning service app for booking services, viewing packages, and managing appointments.",
      logo: divinusGratiaLogo,
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "Square API",
      ],
      responsibilities: [
        "Built responsive pages with Next.js and Tailwind CSS",
        "Managed client-side state using Zustand",
        "Integrated Square API for frontend bookings",
        "Ensured clean and maintainable UI components",
      ],
      liveLink: "https://divinusgratia.vercel.app/",
      githubLink: "https://github.com/Dev-caezar/divinusgratia",
    },
    {
      title: "Aroura",
      description:
        "A fashion e-commerce app where users browse products, filter categories, manage carts, and make purchases.",
      logo: arouraLogo,
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      responsibilities: [
        "Developed responsive product and category pages",
        "Implemented client-side state management with Zustand",
        "Optimized UI components for performance",
        "Ensured smooth UX interactions across devices",
      ],
      liveLink: "https://aroura-two.vercel.app/",
      githubLink: "https://github.com/Dev-caezar/aroura",
    },
  ];
  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className={`w-full py-24 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          {/* <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-4">
            Portfolio
          </h2> */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h3 className="text-4xl font-light italic">My Projects</h3>
            <p className="text-xs font-bold opacity-40 uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group p-8 rounded-3xl border transition-all cursor-pointer flex flex-col h-full ${
                  isDarkMode
                    ? "bg-gray-900/40 border-gray-800 hover:border-purple-500/50"
                    : "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-2xl"
                }`}
              >
                <div className="flex justify-between items-start mb-8">
                  <img
                    src={project.logo}
                    className="w-12 h-12 object-contain bg-white rounded-xl p-2 shadow-sm"
                    alt=""
                  />
                  <div
                    className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                  >
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 text-purple-500" />
                  </div>
                </div>
                <h4 className="text-2xl font-medium mb-3">{project.title}</h4>
                <p
                  className={`text-sm font-light mb-8 line-clamp-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-widest font-bold opacity-40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-20">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-4 rounded-full border border-purple-500 disabled:opacity-10"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-4 rounded-full border border-purple-500 disabled:opacity-10"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Optimized Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl ${isDarkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}`}
            >
              <div className="sticky top-0 z-10 flex justify-end p-4 pointer-events-none">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 pointer-events-auto shadow-lg"
                >
                  <FaTimes size={18} />
                </button>
              </div>
              <div className="px-6 pb-10 md:px-16 md:pb-16 -mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5 text-center lg:text-left">
                    <img
                      src={selectedProject.logo}
                      className="w-20 h-20 mx-auto lg:mx-0 mb-8 bg-white rounded-2xl p-3 shadow-xl"
                      alt=""
                    />
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-3 py-1 rounded-full border border-purple-500/30 text-purple-500 font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        className="flex items-center justify-center gap-3 py-4 sm:py-0 text-xs font-bold uppercase tracking-widest text-purple-500"
                      >
                        Live <FaExternalLinkAlt />
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="flex items-center justify-center gap-3 py-4 sm:py-0 text-xs font-bold uppercase tracking-widest opacity-60"
                      >
                        Code <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-7 space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">
                        The Challenge
                      </h4>
                      <p className="text-lg font-light leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4">
                        Contributions
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-sm font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
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
