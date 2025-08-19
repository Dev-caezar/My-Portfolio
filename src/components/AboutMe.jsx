import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
   FaHtml5,
   FaCss3,
   FaSass,
   FaReact,
   FaNodeJs,
   FaGitAlt,
   FaGithub,
} from "react-icons/fa";
import {
   SiJavascript,
   SiRedux,
   SiTailwindcss,
   SiExpo
} from "react-icons/si";

const AboutMe = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   const technologies = [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaSass />, name: "Sass" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiExpo />, name: "Expo" },
   ];

   const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
   };

   const iconContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
         }
      }
   };

   const iconVariants = {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
         }
      }
   };

   return (
      <div
         className={`w-full min-h-screen py-16 flex flex-col items-center justify-center transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
      >
         <div className="w-full max-w-4xl px-4 text-center">
            <motion.h2
               className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
               variants={textVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
            >
               About Me
            </motion.h2>

            <motion.div
               className={`space-y-6 text-sm sm:text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
               variants={textVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
            >
               <p>
                  I am Oko Christian, a frontend and aspiring mobile developer with a passion
                  for building innovative solutions. With 1 year of experience
                  in software engineering, I've developed a strong foundation in
                  problem-solving and a keen interest in staying up-to-date with
                  industry trends.
               </p>
               <p>
                  My expertise lies in React, React Native, and Tailwind
                  CSS, and I am always eager to expand my skill set. I have had the
                  privilege of working on various projects, from personal initiatives
                  to collaborative endeavors, showcasing my adaptability and
                  commitment to delivering high-quality results.
               </p>
               <p>
                  If you have a suitable opportunity that aligns with my expertise,
                  please don't hesitate to reach out.
               </p>
            </motion.div>
         </div>

         {/* Technologies Icons */}
         <motion.div
            className="mt-12 w-full max-w-4xl px-4 flex justify-center flex-wrap gap-6 sm:gap-8"
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            {technologies.map((tech, index) => (
               <motion.div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                  title={tech.name}
                  aria-label={tech.name}
                  variants={iconVariants}
               >
                  <div
                     className={`p-3 sm:p-4 rounded-full border-2 shadow-md ${isDarkMode
                        ? "border-gray-600 bg-gray-800 text-white"
                        : "border-gray-300 bg-gray-100 text-gray-800"
                        }`}
                  >
                     <span className="text-3xl sm:text-4xl">{tech.icon}</span>
                  </div>
               </motion.div>
            ))}
         </motion.div>
      </div>
   );
};

export default AboutMe;