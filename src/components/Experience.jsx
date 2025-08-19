import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Experience = () => {
   // Use useSelector to access the Redux theme state
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
   const [activeTab, setActiveTab] = useState('experience');

   // Data for the Skills section
   const skills = [
      { name: 'HTML', level: 95, color: 'bg-purple-600' },
      { name: 'CSS', level: 85, color: 'bg-yellow-500' },
      { name: 'PHP', level: 90, color: 'bg-red-500' },
      { name: 'Javascript', level: 90, color: 'bg-red-500' },
      { name: 'Angular JS', level: 95, color: 'bg-purple-600' },
      { name: 'Wordpress', level: 85, color: 'bg-cyan-500' },
   ];

   // Data for the Experience section
   const experiences = [
      { title: 'UI Designer', years: '2000 - 2045', company: 'Apex Software Inc' },
      { title: 'Product Designer', years: '2000 - 2045', company: 'Apex Software Inc' },
      { title: 'Web Designer', years: '2000 - 2045', company: 'Apex Software Inc' },
      { title: 'Apps Designer', years: '2000 - 2045', company: 'Apex Software Inc' },
   ];

   // Data for the Education section
   const education = [
      { title: 'Bachelor of Science', years: '1995 - 1999', company: 'University of ABC' },
      { title: 'Master of Arts', years: '2001 - 2003', company: 'University of XYZ' },
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
         className={`w-full h-[80vh] flex justify-center items-center transition-colors duration-500
         ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}
      >
         <motion.div
            className={`p-8 md:p-12 rounded-lg shadow-xl w-full max-w-6xl transition-colors duration-500
            ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            {/* Header and Tab Navigation */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
               <div className="mb-6 md:mb-0">
                  <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Skills & Experience
                  </h2>
               </div>
               {/* Tab Buttons */}
               <div
                  className={`flex flex-row rounded-full p-1 shadow-inner max-w-sm w-full md:w-auto
                  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
               >
                  <button
                     onClick={() => setActiveTab('experience')}
                     className={`px-8 py-4 w-1/2 md:w-auto text-lg font-medium rounded-full transition-colors duration-300
                     ${activeTab === 'experience'
                           ? 'bg-purple-700 text-white shadow-md'
                           : `${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                        }`}
                  >
                     Experience
                  </button>
                  <button
                     onClick={() => setActiveTab('education')}
                     className={`px-8 py-4 w-1/2 md:w-auto text-lg font-medium rounded-full transition-colors duration-300
                     ${activeTab === 'education'
                           ? 'bg-purple-700 text-white shadow-md'
                           : `${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                        }`}
                  >
                     Education
                  </button>
               </div>
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* My Skills Section */}
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

               {/* Experience/Education List Section */}
               <div className={`md:border-l ${isDarkMode ? 'md:border-gray-700' : 'md:border-gray-300'} md:pl-12`}>
                  <h3 className="sr-only">Experience List</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {(activeTab === 'experience' ? experiences : education).map((item, index) => (
                        <div key={index} className="flex flex-col">
                           <span className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</span>
                           <span className={`text-sm mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>{item.years}</span>
                           <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.company}</span>
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