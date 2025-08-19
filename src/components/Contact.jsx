import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   const containerBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
   const textPrimary = isDarkMode ? 'text-white' : 'text-gray-800';
   const inputBg = isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
   const inputBorder = isDarkMode ? 'border-gray-700' : 'border-gray-300';
   const buttonBg = isDarkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-700 hover:bg-purple-800';

   const fadeInUp = {
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
         className={`w-full py-10 flex flex-col items-center justify-center transition-colors duration-500
         ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
         <motion.div
            className={`p-8 md:p-12 rounded-lg shadow-xl w-full max-w-5xl transition-colors duration-500 ${containerBg}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            <div className="text-center mb-8">
               <h2 className={`text-4xl font-bold ${textPrimary}`}>
                  Say Hello
               </h2>
               <p className={`mt-4 text-sm md:text-md max-w-2xl mx-auto
                  ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Feel free to get in touch. Whether you have a project in mind, a question, or just want to say hi, I'll do my best to get back to you!
               </p>
            </div>

            <form className="w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium sr-only">Your Name</label>
                     <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                           ${inputBg} ${inputBorder}`}
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium sr-only">Your Email</label>
                     <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                           ${inputBg} ${inputBorder}`}
                     />
                  </div>
               </div>

               <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium sr-only">Subject</label>
                  <input
                     type="text"
                     id="subject"
                     placeholder="Subject"
                     className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                        ${inputBg} ${inputBorder}`}
                  />
               </div>

               <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium sr-only">Message</label>
                  <textarea
                     id="message"
                     placeholder="Your Message"
                     rows="6"
                     className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                        ${inputBg} ${inputBorder}`}
                  ></textarea>
               </div>

               <div className="flex justify-center">
                  <button
                     type="submit"
                     className={`flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full text-white transition-colors duration-300
                        ${buttonBg}`}
                  >
                     Send Message
                     <FaPaperPlane />
                  </button>
               </div>
            </form>
         </motion.div>
      </div>
   );
};

export default Contact;