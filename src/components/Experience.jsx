import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Experience = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
   const [activeTab, setActiveTab] = useState('experience');

   const skills = [
      { name: 'HTML', level: 95, color: 'bg-purple-600' },
      { name: 'CSS', level: 95, color: 'bg-purple-500' },
      { name: 'Javascript', level: 80, color: 'bg-yellow-500' },
      { name: 'Tailwind CSS', level: 90, color: 'bg-purple-500' },
      { name: 'Styled Component', level: 85, color: 'bg-yellow-500' },
      { name: 'React JS', level: 95, color: 'bg-purple-600' },
      { name: 'React-Native', level: 20, color: 'bg-red-600' },
   ];

   const experiences = [
      {
         title: 'Frontend Developer',
         company: 'Quicklah (Startup Project)',
         years: '2025 - till date',
         description: 'Contributing to the development of a startup project by building responsive user interfaces, optimizing performance, and collaborating with the product team to enhance user experience.'
      },
      {
         title: 'Frontend Developer',
         company: 'The Curve Africa',
         years: '2024 - till date',
         description: 'Designed and developed responsive user interfaces for web applications, collaborating with a cross-functional team to deliver high-quality software products.'
      },
   ];


   const education = [
      { title: 'The Curve Africa', years: 'October 2024 - April 2025' },
      { title: 'Expressway Senior High School', years: '2014 - 2019' },
   ];

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            ease: "easeOut"
         }
      }
   };

   return (
      <div
         id='experience'
         className={`w-full py-10 flex justify-center items-center transition-colors duration-500
         ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
         <motion.div
            className={`p-8 md:p-12 rounded-lg shadow-xl w-full max-w-6xl transition-colors duration-500
            ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            <div className="flex flex-col md:flex-row md:items-start md:justify-around mb-8">
               <div className="mb-6 md:mb-0">
                  <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Skills & Experience
                  </h2>
               </div>
               <div
                  className={`flex flex-row rounded-full p-1 shadow-inner max-w-sm w-full md:w-auto
                  ${isDarkMode ? 'bg-gray-200' : 'bg-gray-200'}`}
               >
                  <button
                     onClick={() => setActiveTab('experience')}
                     className={`px-8 py-4 w-1/2 md:w-auto text-lg font-medium rounded-full transition-colors duration-300 cursor-pointer
                     ${activeTab === 'experience'
                           ? 'bg-purple-700 text-white shadow-md'
                           : `${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`
                        }`}
                  >
                     Experience
                  </button>
                  <button
                     onClick={() => setActiveTab('education')}
                     className={`px-8 py-4 w-1/2 md:w-auto text-lg font-medium rounded-full transition-colors duration-300 cursor-pointer
                     ${activeTab === 'education'
                           ? 'bg-purple-700 text-white shadow-md'
                           : `${isDarkMode ? 'text-purple-800' : 'text-purple-800'}`
                        }`}
                  >
                     Education
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     My Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {skills.map((skill, index) => (
                        <div key={index}>
                           <div className="flex justify-between items-center mb-1">
                              <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                           </div>
                           <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                              <motion.div
                                 className={`${skill.color} h-2 rounded-full`}
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${skill.level}%` }}
                                 transition={{ duration: 1.5 }}
                                 viewport={{ once: true }}
                              ></motion.div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className={`md:border-l ${isDarkMode ? 'md:border-gray-700' : 'md:border-gray-300'} md:pl-12`}>
                  <h3 className="sr-only">Experience List</h3>
                  <div className="grid grid-cols-1 gap-8">
                     {(activeTab === 'experience' ? experiences : education).map((item, index) => (
                        <div key={index} className="flex flex-col">
                           {item.title && (
                              <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h4>
                           )}
                           {item.company && (
                              <p className={`text-lg font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>{item.company}</p>
                           )}
                           {item.years && (
                              <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.years}</p>
                           )}
                           {item.description && (
                              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default Experience;