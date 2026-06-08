import React, { useState, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  FaArrowRight,
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 3;

  // Background Particle Logic
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * -10,
      })),
    [],
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Pagination Logic
  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="w-full py-24 bg-[#05030a] text-white relative overflow-hidden group/section"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
          style={{ x: glowX, y: glowY }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #332d4a 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#791cf3]" />
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-purple-400">
                02 // PROJECTS
              </h2>
            </div>
            <h3 className="text-4xl md:text-4xl font-bold tracking-tight">
              Selected Works
            </h3>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-purple-500/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <img
                  src={project.logo}
                  className="w-14 h-14 object-contain p-2 bg-white/5 rounded-2xl border border-white/10"
                  alt={project.title}
                />
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FaArrowRight size={12} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-bold uppercase tracking-wider text-purple-300 bg-purple-900/20 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-purple-900/30 text-purple-400 disabled:opacity-30 hover:bg-purple-900/20 transition-all"
            >
              <FaChevronLeft />
            </button>
            <span className="text-sm font-mono text-gray-400">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-purple-900/30 text-purple-400 disabled:opacity-30 hover:bg-purple-900/20 transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Modal remains unchanged */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#05030a]/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e0b1a] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ... (Modal content as before) */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-500 hover:text-white bg-white/5 rounded-full"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                <div className="lg:w-1/3 flex flex-col gap-4">
                  <img
                    src={selectedProject.logo}
                    className="w-20 h-20 rounded-2xl border border-white/10"
                    alt={selectedProject.title}
                  />
                  <h3 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-2/3 lg:border-l border-white/10 lg:pl-10">
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <ul className="space-y-3">
                    {selectedProject.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-gray-300 flex gap-3">
                        • {r}
                      </li>
                    ))}
                  </ul>
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
