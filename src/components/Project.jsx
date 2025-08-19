import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Import logos for each project
import bookTrackerLogo from "../assets/image/book-tracker.png";
import zScoutsLogo from "../assets/image/zscouts.png";
import quicklahLogo from "../assets/image/quicklah.png";

const Projects = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   const projects = [
      {
         title: "Book Management Tracker",
         description: "A thoughtfully designed reading companion that empowers book lovers to effectively track their progress, curate personalized book libraries, and set meaningful reading goals. With streamlined organization and progress visualization, the tool keeps readers motivated and on track toward their literary aspirations.",
         logo: bookTrackerLogo,
         technologies: ["React", "Node.js", "Express", "MongoDB"],
         liveLink: "https://book-management-tracker.vercel.app/",
         githubLink: "https://github.com/Dev-caezar/book-management-tracker"
      },
      {
         title: "Z-Scouts",
         description: "An innovative sports networking platform that bridges the gap between grassroots players, scouts, and professional clubs. It provides aspiring athletes with a dedicated space to showcase their talent, gain visibility, and create opportunities for career advancement in football.",
         logo: zScoutsLogo,
         technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
         liveLink: "https://z-scoutsf.vercel.app/",
         githubLink: "https://github.com/Dev-caezar/ZScouts"
      },
      {
         title: "Quicklah",
         description: "A modern food delivery platform designed to optimize the connection between restaurants and customers. It features real-time order tracking, efficient driver management, and an intuitive interface that ensures a seamless and reliable dining experience.",
         logo: quicklahLogo,
         technologies: ["React.js", "Tailwind CSS", "Redux", "Axios"],
         liveLink: "https://quicklah.vercel.app/",
         githubLink: "https://github.com/Quicklah/Quicklah"
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2
         }
      }
   };

   const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
   };

   return (
      <div
         className={`w-full min-h-screen py-16 flex flex-col items-center justify-center transition-colors duration-500
         ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>

         <div className="w-full max-w-6xl px-4 text-center">
            <h2
               className={`text-4xl font-bold mb-8
                  ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
               My Projects
            </h2>

            <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
            >
               {projects.map((project, index) => (
                  <motion.div
                     key={index}
                     className={`p-6 rounded-2xl shadow-lg transition-colors duration-500 transform hover:scale-105 hover:shadow-xl
                     ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                     variants={cardVariants}
                  >
                     <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-14 h-14 mx-auto mb-4 object-contain rounded-full border-2 border-gray-300 dark:border-gray-600 p-2 bg-white"
                     />
                     <h3
                        className={`text-2xl font-semibold mb-2 text-center
                           ${isDarkMode ? 'text-indigo-400' : 'text-purple-700'}`}
                     >
                        {project.title}
                     </h3>
                     <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 text-center">
                        {project.description}
                     </p>

                     <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                           <span
                              key={techIndex}
                              className={`text-xs font-medium px-3 py-1 rounded-full
                              ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                           >
                              {tech}
                           </span>
                        ))}
                     </div>

                     <div className="flex justify-center items-center gap-4 mt-auto">
                        <a
                           href={project.liveLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={`flex items-center gap-1 text-purple-700 dark:text-indigo-400 text-sm font-medium transition-colors duration-200 hover:text-purple-500 dark:hover:text-indigo-300`}
                        >
                           <FaExternalLinkAlt />
                           Live
                        </a>
                        <a
                           href={project.githubLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={`flex items-center gap-1 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-400`}
                        >
                           <FaGithub />
                           GitHub
                        </a>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </div>
   );
};

export default Projects;